import { Injectable } from '@nestjs/common';
import { Medication } from '@prisma/client';
import { ConnectMedicationDto } from 'src/generated/medication/dto/connect-medication.dto';
import { UpdateMedicationDto } from 'src/generated/medication/dto/update-medication.dto';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { FindMedicationsDto } from './dto/find-medications.dto';
import { MedicationRepo } from './medication.repo';

@Injectable()
export class MedicationService {
  constructor(private readonly medicationRepo: MedicationRepo) {}

  async create(createMedicationDto: CreateMedicationDto): Promise<Medication> {
    const urlName = this.formatUrlName(createMedicationDto.name);
    const medication = await this.medicationRepo.create(
      createMedicationDto,
      urlName,
    );
    return medication;
  }

  async findOneById(
    connectMedicationDto: ConnectMedicationDto,
  ): Promise<Medication> {
    return this.medicationRepo.findOneById(connectMedicationDto);
  }

  async findOneByUrlName(
    connectMedicationDto: ConnectMedicationDto,
  ): Promise<Medication> {
    return this.medicationRepo.findOneByUrlName(connectMedicationDto);
  }

  async findAll(findMedicationsDto: FindMedicationsDto) {
    return this.medicationRepo.findAll(findMedicationsDto);
  }

  private formatUrlName(name: string): string {
    const lowerCaseUrlName = name.toLocaleLowerCase();
    const trimmedUrlName = lowerCaseUrlName.trim();
    const singleSpaceUrlName = trimmedUrlName.replace(/\s\s+/g, ' ');
    const spaceToHyphenUrlName = singleSpaceUrlName.split(' ').join('-');

    return spaceToHyphenUrlName;
  }

  async update(
    id: number,
    updateMedicationDto: UpdateMedicationDto,
  ): Promise<Medication> {
    if (updateMedicationDto.name) {
      const urlName = this.formatUrlName(updateMedicationDto.name);
      return this.medicationRepo.update(id, {
        ...updateMedicationDto,
        urlName,
      });
    }

    return this.medicationRepo.update(id, updateMedicationDto);
  }

  async remove(id: number): Promise<void> {
    await this.medicationRepo.remove(id);
  }
}
