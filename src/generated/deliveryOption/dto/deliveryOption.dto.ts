
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DeliveryOptionDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
optionName: string ;
@ApiProperty({
  type: 'string',
})
optionType: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
deliveryTimeHours: number ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
deliveryFee: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  nullable: true,
})
discountPercentage: Prisma.Decimal  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  nullable: true,
})
minimumOrderAmount: Prisma.Decimal  | null;
@ApiProperty({
  type: 'boolean',
})
isActive: boolean ;
@ApiProperty({
  type: 'boolean',
})
isAvailable: boolean ;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
isFreeDelivery: boolean  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
}
