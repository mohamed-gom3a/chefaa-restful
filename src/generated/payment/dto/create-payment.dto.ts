
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsNotEmpty,IsString} from 'class-validator'




export class CreatePaymentDto {
  @ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
@IsNotEmpty()
@IsDecimal()
amount: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
method: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
transactionId: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
paidAt: Date ;
}
