
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {CartItem} from '../../cartItem/entities/cartItem.entity'
import {Bundle} from '../../bundle/entities/bundle.entity'
import {Category} from '../../category/entities/category.entity'
import {Offer} from '../../offer/entities/offer.entity'
import {OrderItem} from '../../orderItem/entities/orderItem.entity'
import {Prescription} from '../../prescription/entities/prescription.entity'
import {WishlistItem} from '../../wishlistItem/entities/wishlistItem.entity'


export class Medication {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
price: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
stock: number ;
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
  type: 'integer',
  format: 'int32',
})
sellingCount: number ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
image: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
categoryId: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
bundleId: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
urlName: string  | null;
@ApiProperty({
  type: () => CartItem,
  isArray: true,
  required: false,
})
cartItems?: CartItem[] ;
@ApiProperty({
  type: () => Bundle,
  required: false,
  nullable: true,
})
bundle?: Bundle  | null;
@ApiProperty({
  type: () => Category,
  required: false,
  nullable: true,
})
category?: Category  | null;
@ApiProperty({
  type: () => Offer,
  isArray: true,
  required: false,
})
Offer?: Offer[] ;
@ApiProperty({
  type: () => OrderItem,
  isArray: true,
  required: false,
})
orderItems?: OrderItem[] ;
@ApiProperty({
  type: () => Prescription,
  isArray: true,
  required: false,
})
prescriptions?: Prescription[] ;
@ApiProperty({
  type: () => WishlistItem,
  isArray: true,
  required: false,
})
wishlistItems?: WishlistItem[] ;
}
