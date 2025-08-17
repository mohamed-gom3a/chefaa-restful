import { OmitType } from '@nestjs/swagger';
import { CreateSuperCategoryDto as GeneratedDto } from 'src/generated/superCategory/dto/create-superCategory.dto';

export class CreateSuperCategoryDto extends OmitType(GeneratedDto, [
  'image',
] as const) {}
