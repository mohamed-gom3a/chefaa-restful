
import {Gender,Country,Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Purchase} from '../../purchase/entities/purchase.entity'
import {UserTokens} from '../../userTokens/entities/userTokens.entity'
import {Order} from '../../order/entities/order.entity'
import {Cart} from '../../cart/entities/cart.entity'
import {WishlistItem} from '../../wishlistItem/entities/wishlistItem.entity'
import {CreditCard} from '../../creditCard/entities/creditCard.entity'
import {Address} from '../../address/entities/address.entity'
import {Notification} from '../../notification/entities/notification.entity'
import {Subscription} from '../../subscription/entities/subscription.entity'


export class User {
  @ApiProperty()
id: string ;
@ApiProperty()
email: string ;
@ApiProperty()
password: string ;
@ApiProperty({
  nullable: true,
})
name: string  | null;
@ApiProperty({
  nullable: true,
})
address: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
phone: number  | null;
@ApiProperty({
  enum: Gender,
  nullable: true,
})
gender: Gender  | null;
@ApiProperty({
  enum: Country,
  nullable: true,
})
country: Country  | null;
@ApiProperty({
  enum: Role,
})
role: Role ;
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
  type: () => Purchase,
  isArray: true,
  required: false,
})
Purchase?: Purchase[] ;
@ApiProperty({
  type: () => UserTokens,
  isArray: true,
  required: false,
})
UserTokens?: UserTokens[] ;
@ApiProperty({
  type: () => Order,
  isArray: true,
  required: false,
})
orders?: Order[] ;
@ApiProperty({
  type: () => Cart,
  isArray: true,
  required: false,
})
carts?: Cart[] ;
@ApiProperty({
  type: () => WishlistItem,
  isArray: true,
  required: false,
})
wishlistItems?: WishlistItem[] ;
@ApiProperty({
  type: () => CreditCard,
  isArray: true,
  required: false,
})
creditCards?: CreditCard[] ;
@ApiProperty({
  type: () => Address,
  isArray: true,
  required: false,
})
Address?: Address[] ;
@ApiProperty({
  type: () => Notification,
  isArray: true,
  required: false,
})
Notification?: Notification[] ;
@ApiProperty({
  type: () => Subscription,
  isArray: true,
  required: false,
})
Subscription?: Subscription[] ;
}
