import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { BasePaginationDto } from 'src/common/dtos/base-pagination.dto';
import { File } from 'src/common/types/file';
import { UpdateCategoryDto } from 'src/generated/category/dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindCategoriesDto } from './dto/find-categories.dto';

@Injectable()
export class CategoryRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({
      data: createCategoryDto,
      include: {
        superCategory: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findAll(findCategoriesDto: FindCategoriesDto) {
    const { page, offset, skip, superCategoryId, searchName } =
      findCategoriesDto;

    const whereClause: Prisma.CategoryWhereInput = {};
    if (superCategoryId) {
      whereClause.superCategoryId = superCategoryId;
    }

    if (searchName) {
      whereClause.name = { contains: searchName, mode: 'insensitive' };
    }

    const orderByClause: Prisma.CategoryOrderByWithRelationInput = {};
    orderByClause.name = 'asc';

    const [categories, total] = await Promise.all([
      this.prisma.category.findMany({
        skip: skip,
        take: offset,
        where: whereClause,
        include: {
          superCategory: { select: { name: true } },
        },
        orderBy: orderByClause,
      }),
      this.prisma.category.count({ where: whereClause }),
    ]);
    return BasePaginationDto.paginate(categories, total, offset, page);
  }

  async findOneById(id: number) {
    return this.prisma.category.findUniqueOrThrow({
      where: { id },
      include: { superCategory: { select: { name: true } } },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
      include: { superCategory: { select: { name: true } } },
    });
  }

  async remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }

  async uploadImage(id: number, file: File) {
    return this.prisma.category.update({
      where: { id },
      data: { image: file.filename },
    });
  }
}
