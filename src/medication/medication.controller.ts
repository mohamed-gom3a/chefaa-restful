import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { MedicationService } from './medication.service';

@Controller('medication')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Public()
  @Post()
  async create(@Body() createMedicationDto: CreateMedicationDto) {
    return this.medicationService.create(createMedicationDto);
  }
}
