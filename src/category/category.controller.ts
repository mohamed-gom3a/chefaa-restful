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
import { Category } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';
import { FileUpload } from 'src/common/decorators/file-upload.decorator';
import { IsAdmin } from 'src/common/decorators/is-admin.decorator';
import { File } from 'src/common/types/file';
import { UpdateCategoryDto } from 'src/generated/category/dto/update-category.dto';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindCategoriesDto } from './dto/find-categories.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @IsAdmin()
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Public()
  @Get()
  async findAll(@Query() findCategoriesDto: FindCategoriesDto) {
    return this.categoryService.findAll(findCategoriesDto);
  }

  @IsAdmin()
  @FileUpload()
  @Patch(':id/image')
  uploadPhoto(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: File,
  ): Promise<Category> {
    return this.categoryService.uploadImage(id, file);
  }

  @Public()
  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOneById(id);
  }

  @IsAdmin()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.remove(id);
  }

  @IsAdmin()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }
}
