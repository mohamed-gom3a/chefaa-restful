
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class PaymentDto {
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
}
