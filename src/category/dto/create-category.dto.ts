import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateCategoryDto as GeneratedDto } from 'src/generated/category/dto/create-category.dto';

export class CreateCategoryDto extends GeneratedDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsNumber()
  superCategoryId: number;
}
