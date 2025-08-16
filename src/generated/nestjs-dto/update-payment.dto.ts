
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsOptional,IsString} from 'class-validator'




export class UpdatePaymentDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
})
@IsOptional()
@IsDecimal()
amount?: Prisma.Decimal ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
method?: string ;
@ApiProperty({
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
