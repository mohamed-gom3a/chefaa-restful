
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDecimal,IsInt,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDeliveryOptionDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
optionName: string ;
@ApiProperty()
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
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
deliveryFee: Prisma.Decimal ;
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
