import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BasePaginationDto } from 'src/common/dtos/base-pagination.dto';

export class FindSuperCategoriesDto extends BasePaginationDto {
  @ApiProperty({
    description: 'Search super categories by name',
    required: false,
    example: 'health',
  })
  @IsOptional()
  @IsString()
  searchName?: string;
}

