
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Delivery} from './delivery.entity'


export class DeliveryOption {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
optionName: string ;
@ApiProperty()
optionType: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
deliveryTimeHours: number ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
deliveryFee: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
  nullable: true,
})
discountPercentage: Prisma.Decimal  | null;
@ApiProperty({
  type: 'number',
  format: 'double',
  nullable: true,
})
minimumOrderAmount: Prisma.Decimal  | null;
@ApiProperty()
isActive: boolean ;
@ApiProperty()
isAvailable: boolean ;
@ApiProperty({
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
@ApiProperty({
  type: () => Delivery,
  isArray: true,
  required: false,
})
Delivery?: Delivery[] ;
}
