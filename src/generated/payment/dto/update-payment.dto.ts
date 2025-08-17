
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsOptional,IsString} from 'class-validator'




export class UpdatePaymentDto {
  @ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
})
@IsOptional()
@IsDecimal()
amount?: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
method?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
transactionId?: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
paidAt?: Date ;
}
