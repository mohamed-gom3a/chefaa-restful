
import {Prisma,AmountType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from '../../order/entities/order.entity'


export class Coupon {
  @ApiProperty()
id: string ;
@ApiProperty()
code: string ;
@ApiProperty()
description: string ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
amount: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
minOrderValue: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
  nullable: true,
})
maxDiscountValue: Prisma.Decimal  | null;
@ApiProperty({
  enum: AmountType,
})
amountType: AmountType ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
usageLimit: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
usedCount: number ;
@ApiProperty()
isActive: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
validFrom: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
validUntil: Date ;
@ApiProperty()
createdBy: string ;
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
  type: () => Order,
  isArray: true,
  required: false,
})
orders?: Order[] ;
}
