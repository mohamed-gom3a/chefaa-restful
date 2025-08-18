
import {CartStatus,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class CartDto {
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
}
