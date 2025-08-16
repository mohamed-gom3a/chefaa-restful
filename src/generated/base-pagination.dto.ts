import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class BasePaginationDto {
  @ApiProperty({ example: 1, description: 'Page number', required: false })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiProperty({ example: 10, description: 'Items per page', required: false })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  offset: number = 10;

  get skip(): number {
    return (this.page - 1) * this.offset;
  }

  /**
   * Calculate pagination metadata based on total count
   */
  static getPaginationMetadata(total: number, offset: number, page: number) {
    const totalPages = Math.ceil(total / offset);

    return {
      page,
      offset,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
  }

  /**
   * Create a paginated response with data and metadata
   */
  static paginate<T>(data: T[], total: number, offset: number, page: number) {
    return {
      data,
      pagination: BasePaginationDto.getPaginationMetadata(total, offset, page),
    };
  }
}
