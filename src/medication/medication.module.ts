import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MedicationController } from './medication.controller';
import { MedicationRepo } from './medication.repo';
import { MedicationService } from './medication.service';

@Module({
  imports: [PrismaModule],
  exports: [MedicationService],
  controllers: [MedicationController],
  providers: [MedicationService, MedicationRepo],
})
export class MedicationModule {}
