/* eslint-disable prettier/prettier */
import {
    BadRequestException,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MedicationImportService } from './medication-import.service';

@Controller('medications')
export class MedicationImportController {
  constructor(private medicationImportService: MedicationImportService) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importMedications(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    if (!file.mimetype.includes('json')) {
      throw new BadRequestException('File must be a JSON file');
    }

    try {
      const jsonData = JSON.parse(file.buffer.toString());
      const result = await this.medicationImportService.importMedications(
        jsonData
      );

      return {
        message: `Successfully imported ${result.imported} medications`,
        imported: result.imported,
      };
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new BadRequestException('Invalid JSON file format');
      }
      throw error;
    }
  }
}
