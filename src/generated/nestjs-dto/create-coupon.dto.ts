
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsInt,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateCouponDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
code: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
description: string ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
amount: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
minOrderValue: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
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
})
@IsNotEmpty()
@IsDateString()
validFrom: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
validUntil: Date ;
@ApiProperty()
@IsNotEmpty()
@IsString()
createdBy: string ;
}
