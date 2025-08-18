
import {Country,Gender,Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
<<<<<<< HEAD
import {UserTokens} from '../../userTokens/entities/userTokens.entity'
import {Order} from '../../order/entities/order.entity'
import {Cart} from '../../cart/entities/cart.entity'
import {WishlistItem} from '../../wishlistItem/entities/wishlistItem.entity'
import {CreditCard} from '../../creditCard/entities/creditCard.entity'
=======
>>>>>>> feature/super-category
import {Address} from '../../address/entities/address.entity'
import {Cart} from '../../cart/entities/cart.entity'
import {CreditCard} from '../../creditCard/entities/creditCard.entity'
import {Notification} from '../../notification/entities/notification.entity'
import {Order} from '../../order/entities/order.entity'
import {Purchase} from '../../purchase/entities/purchase.entity'
import {Subscription} from '../../subscription/entities/subscription.entity'
import {UserTokens} from '../../userTokens/entities/userTokens.entity'
import {WishlistItem} from '../../wishlistItem/entities/wishlistItem.entity'


export class User {
  @ApiProperty({
  type: 'string',
})
id: string ;
<<<<<<< HEAD
@ApiProperty({
  type: 'string',
})
email: string ;
@ApiProperty({
  type: 'string',
})
password: string ;
=======
>>>>>>> feature/super-category
@ApiProperty({
  type: 'string',
  nullable: true,
})
name: string  | null;
@ApiProperty({
  type: 'string',
<<<<<<< HEAD
  nullable: true,
=======
>>>>>>> feature/super-category
})
email: string ;
@ApiProperty({
  type: 'string',
})
<<<<<<< HEAD
phone: number  | null;
@ApiProperty({
  enum: Gender,
  enumName: 'Gender',
  nullable: true,
})
gender: Gender  | null;
@ApiProperty({
  enum: Country,
  enumName: 'Country',
  nullable: true,
})
country: Country  | null;
@ApiProperty({
  enum: Role,
  enumName: 'Role',
})
role: Role ;
=======
password: string ;
>>>>>>> feature/super-category
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
<<<<<<< HEAD
  type: () => UserTokens,
  isArray: true,
  required: false,
=======
  type: 'string',
  nullable: true,
})
address: string  | null;
@ApiProperty({
  enum: Role,
  enumName: 'Role',
>>>>>>> feature/super-category
})
role: Role ;
@ApiProperty({
  enum: Country,
  enumName: 'Country',
  nullable: true,
})
country: Country  | null;
@ApiProperty({
  enum: Gender,
  enumName: 'Gender',
  nullable: true,
})
gender: Gender  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
phone: number  | null;
@ApiProperty({
  type: () => Address,
  isArray: true,
  required: false,
})
Address?: Address[] ;
@ApiProperty({
  type: () => Cart,
  isArray: true,
  required: false,
})
carts?: Cart[] ;
@ApiProperty({
  type: () => CreditCard,
  isArray: true,
  required: false,
})
creditCards?: CreditCard[] ;
@ApiProperty({
  type: () => Notification,
  isArray: true,
  required: false,
})
Notification?: Notification[] ;
@ApiProperty({
  type: () => Order,
  isArray: true,
  required: false,
})
orders?: Order[] ;
@ApiProperty({
  type: () => Purchase,
  isArray: true,
  required: false,
})
Purchase?: Purchase[] ;
@ApiProperty({
  type: () => Subscription,
  isArray: true,
  required: false,
})
Subscription?: Subscription[] ;
@ApiProperty({
  type: () => UserTokens,
  isArray: true,
  required: false,
})
UserTokens?: UserTokens[] ;
@ApiProperty({
  type: () => WishlistItem,
  isArray: true,
  required: false,
})
wishlistItems?: WishlistItem[] ;
}
