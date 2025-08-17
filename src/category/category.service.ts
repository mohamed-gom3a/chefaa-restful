import { Injectable } from '@nestjs/common';
import { File } from 'src/common/types/file';
import { UpdateCategoryDto } from 'src/generated/category/dto/update-category.dto';
import { CategoryRepo } from './category.repo';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindCategoriesDto } from './dto/find-categories.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepo) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepo.create(createCategoryDto);
  }

  async findAll(findCategoriesDto: FindCategoriesDto) {
    return this.categoryRepo.findAll(findCategoriesDto);
  }

  async findOneById(id: number) {
    return this.categoryRepo.findOneById(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepo.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return this.categoryRepo.remove(id);
  }

  async uploadImage(id: number, file: File) {
    return this.categoryRepo.uploadImage(id, file);
  }
}
