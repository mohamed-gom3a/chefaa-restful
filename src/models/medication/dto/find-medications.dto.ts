import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { BasePaginationDto } from 'src/common/dtos/base-pagination.dto';

export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum OrderBy {
  NAME = 'name',
  PRICE = 'price',
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  SELLING_COUNT = 'sellingCount',
}

export class FindMedicationsDto extends BasePaginationDto {
  @ApiProperty({
    description: 'Search medications by name',
    required: false,
    example: 'aspirin',
  })
  @IsOptional()
  @IsString()
  searchName?: string;

  @ApiProperty({
    description: 'Minimum price filter',
    required: false,
    example: 10.5,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @ApiProperty({
    description: 'Maximum price filter',
    required: false,
    example: 100.0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @ApiProperty({
    description: 'Filter by category ID',
    required: false,
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  categoryId?: number;

  @ApiProperty({
    description: 'Filter by bundle ID',
    required: false,
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  bundleId?: number;

  @ApiProperty({
    description: 'Order by field',
    required: false,
    enum: OrderBy,
    example: OrderBy.NAME,
  })
  @IsOptional()
  @IsEnum(OrderBy)
  orderBy?: OrderBy;

  @ApiProperty({
    description: 'Order direction',
    required: false,
    enum: OrderDirection,
    example: OrderDirection.ASC,
  })
  @IsOptional()
  @IsEnum(OrderDirection)
  orderDirection?: OrderDirection;
}
