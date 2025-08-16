
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Medication} from '../../medication/entities/medication.entity'
import {Cart} from '../../cart/entities/cart.entity'


export class CartItem {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
price: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
quantity: number ;
@ApiProperty({
  type: () => Medication,
  required: false,
})
medication?: Medication ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
@ApiProperty({
  type: () => Cart,
  required: false,
})
cart?: Cart ;
@ApiProperty()
cartId: string ;
}
