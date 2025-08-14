import { BadRequestException, Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime';
import { PrismaService } from '../prisma/prisma.service';
import { ImportMedicationDto } from './dto/import-medication.dto';

@Injectable()
export class MedicationImportService {
  constructor(private prisma: PrismaService) {}

  async importMedications(medications: ImportMedicationDto[]) {
    if (!Array.isArray(medications)) {
      throw new BadRequestException('Medications data must be an array');
    }

    if (medications.length === 0) {
      throw new BadRequestException('Medications array cannot be empty');
    }

    // Validate each medication
    for (const med of medications) {
      if (!med.name || typeof med.name !== 'string') {
        throw new BadRequestException('Each medication must have a valid name');
      }
      if (!med.price || typeof med.price !== 'number' || med.price <= 0) {
        throw new BadRequestException(
          'Each medication must have a valid positive price'
        );
      }
    }

    try {
      const result = await this.prisma.medication.createMany({
        data: medications.map((med) => ({
          name: med.name,
          description: med.description || null,
          price: new Decimal(med.price),
          stock: med.stock || 0,
          sellingCount: med.sellingCount || 0,
          image: med.image || null,
          categoryId: med.categoryId || null,
          bundleId: med.bundleId || null,
        })),
        skipDuplicates: true,
      });

      return { imported: result.count };
    } catch (error) {
      throw new BadRequestException(
        `Failed to import medications: ${error.message}`
      );
    }
  }
}
