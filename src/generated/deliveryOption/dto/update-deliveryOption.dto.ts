
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDecimal,IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateDeliveryOptionDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
optionName?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
optionType?: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
deliveryTimeHours?: number ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
})
@IsOptional()
@IsDecimal()
deliveryFee?: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDecimal()
discountPercentage?: Prisma.Decimal  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDecimal()
minimumOrderAmount?: Prisma.Decimal  | null;
@ApiProperty({
  type: 'boolean',
  required: false,
  nullable: true,
})
@IsOptional()
@IsBoolean()
isFreeDelivery?: boolean  | null;
}
