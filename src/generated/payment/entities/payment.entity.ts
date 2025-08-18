
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from '../../order/entities/order.entity'


export class Payment {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
amount: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
})
method: string ;
@ApiProperty({
  type: 'string',
})
transactionId: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
paidAt: Date ;
@ApiProperty({
  type: 'string',
})
orderId: string ;
@ApiProperty({
  type: () => Order,
  required: false,
})
order?: Order ;
<<<<<<< HEAD
@ApiProperty({
  type: 'string',
})
orderId: string ;
=======
>>>>>>> feature/super-category
}
