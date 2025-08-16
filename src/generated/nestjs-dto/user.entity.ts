
import {Gender,Country,Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Purchase} from './purchase.entity'
import {UserTokens} from './userTokens.entity'
import {Order} from './order.entity'
import {Cart} from './cart.entity'
import {WishlistItem} from './wishlistItem.entity'
import {CreditCard} from './creditCard.entity'
import {Address} from './address.entity'
import {Notification} from './notification.entity'
import {Subscription} from './subscription.entity'


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
