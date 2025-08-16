
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDecimal,IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateDeliveryOptionDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
optionName?: string ;
@ApiProperty({
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
  type: 'number',
  format: 'double',
  required: false,
})
@IsOptional()
@IsDecimal()
deliveryFee?: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDecimal()
discountPercentage?: Prisma.Decimal  | null;
@ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDecimal()
minimumOrderAmount?: Prisma.Decimal  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsBoolean()
isFreeDelivery?: boolean  | null;
}
