import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MedicationImportController } from './medication-import.controller';
import { MedicationImportService } from './medication-import.service';

@Module({
  imports: [PrismaModule],
  controllers: [MedicationImportController],
  providers: [MedicationImportService],
  exports: [MedicationImportService],
})
export class MedicationImportModule {}
