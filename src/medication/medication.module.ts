import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { multerUploadConfig } from 'src/config/multer-upload.config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MedicationController } from './medication.controller';
import { MedicationRepo } from './medication.repo';
import { MedicationService } from './medication.service';

@Module({
  imports: [PrismaModule, MulterModule.register(multerUploadConfig)],
  exports: [MedicationService],
  controllers: [MedicationController],
  providers: [MedicationService, MedicationRepo],
})
export class MedicationModule {}
