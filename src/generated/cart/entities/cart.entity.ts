
import {CartStatus,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'
import {CartItem} from '../../cartItem/entities/cartItem.entity'


export class Cart {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  enum: CartStatus,
  enumName: 'CartStatus',
})
cartStatus: CartStatus ;
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
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
<<<<<<< HEAD
@ApiProperty({
  type: 'string',
})
userId: string ;
=======
>>>>>>> feature/super-category
@ApiProperty({
  type: () => CartItem,
  isArray: true,
  required: false,
})
items?: CartItem[] ;
}
