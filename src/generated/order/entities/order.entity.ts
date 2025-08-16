
import {Prisma,OrderStatus,ContactPreference,ConflictSolution,PaymentMethod} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Delivery} from '../../delivery/entities/delivery.entity'
import {Pickup} from '../../pickup/entities/pickup.entity'
import {Payment} from '../../payment/entities/payment.entity'
import {Coupon} from '../../coupon/entities/coupon.entity'
import {User} from '../../user/entities/user.entity'
import {OrderItem} from '../../orderItem/entities/orderItem.entity'


export class Order {
  @ApiProperty()
id: string ;
@ApiProperty({
  enum: OrderStatus,
})
orderStatus: OrderStatus ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
subtotalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
discountAmount: Prisma.Decimal ;
@ApiProperty({
  nullable: true,
})
orderNote: string  | null;
@ApiProperty({
  enum: ContactPreference,
})
contactPreference: ContactPreference ;
@ApiProperty({
  enum: ConflictSolution,
})
conflictSolution: ConflictSolution ;
@ApiProperty({
  enum: PaymentMethod,
})
paymentMethod: PaymentMethod ;
@ApiProperty({
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
  nullable: true,
})
couponId: string  | null;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
@ApiProperty()
userId: string ;
@ApiProperty({
  type: () => OrderItem,
  isArray: true,
  required: false,
})
items?: OrderItem[] ;
}
