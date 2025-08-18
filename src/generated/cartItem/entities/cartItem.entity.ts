
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Cart} from '../../cart/entities/cart.entity'
import {Medication} from '../../medication/entities/medication.entity'


export class CartItem {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
price: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
quantity: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
@ApiProperty({
  type: 'string',
})
cartId: string ;
@ApiProperty({
  type: () => Cart,
  required: false,
})
cart?: Cart ;
@ApiProperty({
<<<<<<< HEAD
  type: 'string',
})
cartId: string ;
=======
  type: () => Medication,
  required: false,
})
medication?: Medication ;
>>>>>>> feature/super-category
}
