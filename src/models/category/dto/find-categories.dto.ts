import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { BasePaginationDto } from 'src/common/dtos/base-pagination.dto';

export class FindCategoriesDto extends BasePaginationDto {
  @ApiProperty({
    description: 'Search categories by name',
    required: false,
    example: 'vitamins',
  })
  @IsOptional()
  @IsString()
  searchName?: string;

  @ApiProperty({
    description: 'Filter by super category ID',
    required: false,
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  superCategoryId?: number;
}
