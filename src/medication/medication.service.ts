import { Injectable } from '@nestjs/common';
import { Medication } from '@prisma/client';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { CreateMedicationFailedException } from './exceptions/create-medication-failed.exception';
import { MedicationRepo } from './medication.repo';

@Injectable()
export class MedicationService {
  constructor(private readonly medicationRepo: MedicationRepo) {}

  async create(createMedicationDto: CreateMedicationDto): Promise<Medication> {
    try {
      return await this.medicationRepo.create(createMedicationDto);
    } catch (error) {
      throw new CreateMedicationFailedException();
    }
  }
}
