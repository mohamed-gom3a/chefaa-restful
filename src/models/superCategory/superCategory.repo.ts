import { Injectable } from '@nestjs/common';
import { Prisma, SuperCategory } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { BasePaginationDto } from 'src/common/dtos/base-pagination.dto';
import { SuperCategoryNameInUseException } from 'src/common/exceptions/superCategory/super-category-name-in-use.exception';
import { SuperCategoryNotFoundException } from 'src/common/exceptions/superCategory/super-category-not-found.exception';
import { File } from 'src/common/types/file';
import { UpdateSuperCategoryDto } from 'src/generated/superCategory/dto/update-superCategory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSuperCategoryDto } from './dto/create-superCategory.dto';
import { FindSuperCategoriesDto } from './dto/find-superCategories.dto';

@Injectable()
export class SuperCategoryRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createSuperCategoryDto: CreateSuperCategoryDto,
  ): Promise<SuperCategory> {
    try {
      return await this.prisma.superCategory.create({
        data: createSuperCategoryDto,
        include: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new SuperCategoryNameInUseException();
        }
      }
      throw error;
    }
  }

  async findAll(findSuperCategoriesDto: FindSuperCategoriesDto) {
    const { page, offset, skip, searchName } = findSuperCategoriesDto;

    const whereClause: Prisma.SuperCategoryWhereInput = {};

    if (searchName) {
      whereClause.name = { contains: searchName, mode: 'insensitive' };
    }

    const orderByClause: Prisma.SuperCategoryOrderByWithRelationInput = {};
    orderByClause.name = 'asc';

    const [superCategories, total] = await Promise.all([
      this.prisma.superCategory.findMany({
        skip: skip,
        take: offset,
        where: whereClause,
        include: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: orderByClause,
      }),
      this.prisma.superCategory.count({ where: whereClause }),
    ]);
    return BasePaginationDto.paginate(superCategories, total, offset, page);
  }

  async findOneById(id: number) {
    try {
      return await this.prisma.superCategory.findUniqueOrThrow({
        where: { id },
        include: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new SuperCategoryNotFoundException();
        }
      }
      throw error;
    }
  }

  async update(id: number, updateSuperCategoryDto: UpdateSuperCategoryDto) {
    try {
      return await this.prisma.superCategory.update({
        where: { id },
        data: updateSuperCategoryDto,
        include: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new SuperCategoryNotFoundException();
        }
        if (error.code === 'P2002') {
          throw new SuperCategoryNameInUseException();
        }
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.superCategory.delete({ where: { id } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new SuperCategoryNotFoundException();
        }
      }
      throw error;
    }
  }

  async uploadImage(id: number, file: File) {
    try {
      return await this.prisma.superCategory.update({
        where: { id },
        data: { image: file.filename },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new SuperCategoryNotFoundException();
        }
      }
      throw error;
    }
  }
}
