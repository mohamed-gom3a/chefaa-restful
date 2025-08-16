
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class PaymentDto {
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
}
