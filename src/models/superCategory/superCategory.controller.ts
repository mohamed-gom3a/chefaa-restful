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
import { SuperCategory } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';
import { FileUpload } from 'src/common/decorators/file-upload.decorator';
import { IsAdmin } from 'src/common/decorators/is-admin.decorator';
import { File } from 'src/common/types/file';
import { UpdateSuperCategoryDto } from 'src/generated/superCategory/dto/update-superCategory.dto';
import { CreateSuperCategoryDto } from './dto/create-superCategory.dto';
import { FindSuperCategoriesDto } from './dto/find-superCategories.dto';
import { SuperCategoryService } from './superCategory.service';

@Controller('super-category')
export class SuperCategoryController {
  constructor(private readonly superCategoryService: SuperCategoryService) {}

  @IsAdmin()
  @Post()
  async create(@Body() createSuperCategoryDto: CreateSuperCategoryDto) {
    return this.superCategoryService.create(createSuperCategoryDto);
  }

  @Public()
  @Get()
  async findAll(@Query() findSuperCategoriesDto: FindSuperCategoriesDto) {
    return this.superCategoryService.findAll(findSuperCategoriesDto);
  }

  @IsAdmin()
  @FileUpload()
  @Patch(':id/image')
  uploadPhoto(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: File,
  ): Promise<SuperCategory> {
    return this.superCategoryService.uploadImage(id, file);
  }

  @Public()
  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.superCategoryService.findOneById(id);
  }

  @IsAdmin()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.superCategoryService.remove(id);
  }

  @IsAdmin()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSuperCategoryDto: UpdateSuperCategoryDto,
  ) {
    return this.superCategoryService.update(id, updateSuperCategoryDto);
  }
}
