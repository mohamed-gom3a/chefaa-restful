
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateCouponDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
code?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
description?: string ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
})
@IsOptional()
@IsDecimal()
amount?: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
})
@IsOptional()
@IsDecimal()
minOrderValue?: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDecimal()
maxDiscountValue?: Prisma.Decimal  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
@IsOptional()
@IsInt()
usageLimit?: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
validFrom?: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
validUntil?: Date ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
createdBy?: string ;
}
