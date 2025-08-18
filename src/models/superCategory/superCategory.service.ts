import { Injectable } from '@nestjs/common';
import { File } from 'src/common/types/file';
import { UpdateSuperCategoryDto } from 'src/generated/superCategory/dto/update-superCategory.dto';
import { CreateSuperCategoryDto } from './dto/create-superCategory.dto';
import { FindSuperCategoriesDto } from './dto/find-superCategories.dto';
import { SuperCategoryRepo } from './superCategory.repo';

@Injectable()
export class SuperCategoryService {
  constructor(private readonly superCategoryRepo: SuperCategoryRepo) {}

  async create(createSuperCategoryDto: CreateSuperCategoryDto) {
    return this.superCategoryRepo.create(createSuperCategoryDto);
  }

  async findAll(findSuperCategoriesDto: FindSuperCategoriesDto) {
    return this.superCategoryRepo.findAll(findSuperCategoriesDto);
  }

  async findOneById(id: number) {
    return this.superCategoryRepo.findOneById(id);
  }

  async update(id: number, updateSuperCategoryDto: UpdateSuperCategoryDto) {
    return this.superCategoryRepo.update(id, updateSuperCategoryDto);
  }

  async remove(id: number) {
    return this.superCategoryRepo.remove(id);
  }

  async uploadImage(id: number, file: File) {
    return this.superCategoryRepo.uploadImage(id, file);
  }
}
