import { Injectable } from '@nestjs/common';
import { Medication } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicationDto } from './dto/create-medication.dto';

@Injectable()
export class MedicationRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMedicationDto: CreateMedicationDto): Promise<Medication> {
    const urlName = this.formatUrlName(createMedicationDto.name);
    const medication = await this.prisma.medication.create({
      data: {
        ...createMedicationDto,
        urlName,
      },
      include: { category: { select: { name: true } } },
    });
    return medication;
  }
  private formatUrlName(name: string): string {
    const lowerCaseUrlName = name.toLocaleLowerCase();
    const trimmedUrlName = lowerCaseUrlName.trim();
    const singleSpaceUrlName = trimmedUrlName.replace(/\s\s+/g, ' ');
    const spaceToHyphenUrlName = singleSpaceUrlName.split(' ').join('-');

    return spaceToHyphenUrlName;
  }
}
