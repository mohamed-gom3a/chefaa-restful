
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsNotEmpty,IsString} from 'class-validator'




export class CreatePaymentDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
amount: Prisma.Decimal ;
@ApiProperty()
@IsNotEmpty()
@IsString()
method: string ;
@ApiProperty()
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
