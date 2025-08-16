
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from './order.entity'


export class Payment {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
amount: Prisma.Decimal ;
@ApiProperty()
method: string ;
@ApiProperty()
transactionId: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
paidAt: Date ;
@ApiProperty({
  type: () => Order,
  required: false,
})
order?: Order ;
@ApiProperty()
orderId: string ;
}
