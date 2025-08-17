
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDecimal,IsInt,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDeliveryOptionDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
optionName: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
optionType: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
deliveryTimeHours: number ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
@IsNotEmpty()
@IsDecimal()
deliveryFee: Prisma.Decimal ;
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
