
import {ConflictSolution,ContactPreference,OrderStatus,PaymentMethod,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Delivery} from '../../delivery/entities/delivery.entity'
import {Pickup} from '../../pickup/entities/pickup.entity'
import {Payment} from '../../payment/entities/payment.entity'
import {Coupon} from '../../coupon/entities/coupon.entity'
import {User} from '../../user/entities/user.entity'
import {OrderItem} from '../../orderItem/entities/orderItem.entity'


export class Order {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  enum: OrderStatus,
  enumName: 'OrderStatus',
})
orderStatus: OrderStatus ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
subtotalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
discountAmount: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
orderNote: string  | null;
@ApiProperty({
  enum: ContactPreference,
  enumName: 'ContactPreference',
})
contactPreference: ContactPreference ;
@ApiProperty({
  enum: ConflictSolution,
  enumName: 'ConflictSolution',
})
conflictSolution: ConflictSolution ;
@ApiProperty({
  enum: PaymentMethod,
  enumName: 'PaymentMethod',
})
paymentMethod: PaymentMethod ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
paymentName: string  | null;
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
  required: false,
  nullable: true,
})
delivery?: Delivery  | null;
@ApiProperty({
  type: () => Pickup,
  required: false,
  nullable: true,
})
pickup?: Pickup  | null;
@ApiProperty({
  type: () => Payment,
  required: false,
  nullable: true,
})
payment?: Payment  | null;
@ApiProperty({
  type: () => Coupon,
  required: false,
  nullable: true,
})
coupon?: Coupon  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
couponId: string  | null;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: () => OrderItem,
  isArray: true,
  required: false,
})
items?: OrderItem[] ;
}
