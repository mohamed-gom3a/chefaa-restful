import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../entities/category.entity';

/** Describes the fields needed to create a Category */
export class CreateCategoryDto implements Category {
  image?: string;
  superCategoryId: number;
  medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutCategoryInput;
  id?: number;
  /**
   * Category name
   * @example "Decoration"
   */
  @IsString()
  @IsNotEmpty()
  name: string;
}
