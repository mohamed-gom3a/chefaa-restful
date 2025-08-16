
import {Prisma,CartStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class CartDto {
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
}
