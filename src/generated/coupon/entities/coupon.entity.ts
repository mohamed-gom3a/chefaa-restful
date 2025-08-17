
import {AmountType,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from '../../order/entities/order.entity'


export class Coupon {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
code: string ;
@ApiProperty({
  type: 'string',
})
description: string ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
amount: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
minOrderValue: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  nullable: true,
})
maxDiscountValue: Prisma.Decimal  | null;
@ApiProperty({
  enum: AmountType,
  enumName: 'AmountType',
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
@ApiProperty({
  type: 'boolean',
})
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
@ApiProperty({
  type: 'string',
})
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
