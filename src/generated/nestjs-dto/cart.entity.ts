
import {Prisma,CartStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {CartItem} from './cartItem.entity'


export class Cart {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  enum: CartStatus,
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
  type: () => User,
  required: false,
})
user?: User ;
@ApiProperty()
userId: string ;
@ApiProperty({
  type: () => CartItem,
  isArray: true,
  required: false,
})
items?: CartItem[] ;
}
