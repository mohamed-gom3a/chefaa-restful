import { BadRequestException, Injectable } from '@nestjs/common';
import { Medication, Prisma } from '@prisma/client';
import { BasePaginationDto } from 'src/generated/base-pagination.dto';
import { ConnectMedicationDto } from 'src/generated/medication/dto/connect-medication.dto';
import { UpdateMedicationDto } from 'src/generated/medication/dto/update-medication.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { FindMedicationsDto } from './dto/find-medications.dto';
import { CreateMedicationFailedException } from './exceptions/create-medication-failed.exception';

@Injectable()
export class MedicationRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createMedicationDto: CreateMedicationDto,
    urlName: string,
  ): Promise<Medication> {
    let medication: Medication;
    try {
      medication = await this.prisma.medication.create({
        data: {
          ...createMedicationDto,
          urlName,
        },
        include: { category: { select: { name: true } } },
      });
    } catch (error) {
      throw new CreateMedicationFailedException(error.message);
    }
    return medication;
  }

  async findOneById(
    connectMedicationDto: ConnectMedicationDto,
  ): Promise<Medication> {
    if (!connectMedicationDto.id) {
      throw new BadRequestException('ID is required for findOneById');
    }

    const medication = await this.prisma.medication.findUniqueOrThrow({
      where: { id: connectMedicationDto.id },
      include: { category: { select: { name: true } } },
    });
    return medication;
  }

  async findOneByUrlName(
    connectMedicationDto: ConnectMedicationDto,
  ): Promise<Medication> {
    if (!connectMedicationDto.urlName) {
      throw new BadRequestException(
        'URL name is required for findOneByUrlName',
      );
    }

    return this.prisma.medication.findUniqueOrThrow({
      where: { urlName: connectMedicationDto.urlName },
      include: { category: { select: { name: true } } },
    });
  }

  async findAll(findMedicationsDto: FindMedicationsDto) {
    const {
      page,
      offset,
      skip,
      searchName,
      minPrice,
      maxPrice,
      categoryId,
      bundleId,
      orderBy,
      orderDirection,
    } = findMedicationsDto;

    const whereClause: Prisma.MedicationWhereInput = {};
    if (searchName)
      whereClause.name = { contains: searchName, mode: 'insensitive' };

    if (minPrice || maxPrice) {
      whereClause.price = {};
      if (minPrice) whereClause.price.gte = minPrice;
      if (maxPrice) whereClause.price.lte = maxPrice;
    }

    if (categoryId) {
      whereClause.categoryId = categoryId;
    }

    if (bundleId) {
      whereClause.bundleId = bundleId;
    }

    // Build orderBy clause
    const orderByClause: Prisma.MedicationOrderByWithRelationInput = {};
    if (orderBy) {
      orderByClause[orderBy] = orderDirection || 'asc';
    } else {
      // Default ordering
      orderByClause.createdAt = 'desc';
    }

    const [medications, total] = await Promise.all([
      this.prisma.medication.findMany({
        skip: skip,
        take: offset,
        where: whereClause,
        include: { category: { select: { name: true } } },
        orderBy: orderByClause,
      }),
      this.prisma.medication.count({ where: whereClause }),
    ]);
    return BasePaginationDto.paginate(medications, total, offset, page);
  }

  async update(
    id: number,
    updateMedicationDto: UpdateMedicationDto,
  ): Promise<Medication> {
    return this.prisma.medication.update({
      where: { id },
      data: updateMedicationDto,
      include: { category: { select: { name: true } } },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.medication.delete({ where: { id } });
  }
}
