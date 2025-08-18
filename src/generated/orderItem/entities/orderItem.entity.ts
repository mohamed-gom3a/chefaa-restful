
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Medication} from '../../medication/entities/medication.entity'
import {Order} from '../../order/entities/order.entity'


export class OrderItem {
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
  type: 'string',
  format: 'Decimal.js',
})
discountAmount: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
})
<<<<<<< HEAD
order?: Order ;
@ApiProperty({
  type: 'string',
})
=======
>>>>>>> feature/super-category
orderId: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
@ApiProperty({
  type: () => Medication,
  required: false,
})
medication?: Medication ;
@ApiProperty({
  type: () => Order,
  required: false,
})
order?: Order ;
}
