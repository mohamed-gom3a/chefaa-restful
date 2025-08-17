
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from '../../order/entities/order.entity'
import {Medication} from '../../medication/entities/medication.entity'


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
  type: () => Order,
  required: false,
})
order?: Order ;
@ApiProperty({
  type: 'string',
})
orderId: string ;
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
}
