import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
} from '@nestjs/common';
import { Medication } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';
import { FileUpload } from 'src/common/decorators/file-upload.decorator';
import { IsAdmin } from 'src/common/decorators/is-admin.decorator';
import { File } from 'src/common/types/file';
import { ConnectMedicationDto } from 'src/generated/medication/dto/connect-medication.dto';
import { UpdateMedicationDto } from 'src/generated/medication/dto/update-medication.dto';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { FindMedicationsDto } from './dto/find-medications.dto';
import { MedicationService } from './medication.service';

@Controller('medication')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @IsAdmin()
  @Post()
  async create(@Body() createMedicationDto: CreateMedicationDto) {
    return this.medicationService.create(createMedicationDto);
  }

  @Get('/id/:id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    const connectMedicationDto: ConnectMedicationDto = { id };
    return this.medicationService.findOneById(connectMedicationDto);
  }

  @Get('/:urlName')
  async findOneByUrlName(@Param('urlName') urlName: string) {
    const connectMedicationDto: ConnectMedicationDto = { urlName };
    return this.medicationService.findOneByUrlName(connectMedicationDto);
  }

  @Public()
  @Get()
  async findAll(@Query() findMedicationsDto: FindMedicationsDto) {
    return this.medicationService.findAll(findMedicationsDto);
  }

  @IsAdmin()
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.medicationService.remove(id);
  }

  @IsAdmin()
  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicationDto: UpdateMedicationDto,
  ) {
    return this.medicationService.update(id, updateMedicationDto);
  }

  @IsAdmin()
  @FileUpload()
  @Patch(':id/image')
  uploadPhoto(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: File,
  ): Promise<Medication> {
    return this.medicationService.uploadPicture(id, file);
  }
}
