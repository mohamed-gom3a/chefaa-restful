
import {Prisma,AmountType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsInt,IsNotEmpty,IsOptional} from 'class-validator'




export class CreateOfferDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
amount: Prisma.Decimal ;
@ApiProperty({
  enum: AmountType,
})
@IsNotEmpty()
amountType: AmountType ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
position: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
validFrom: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
validUntil?: Date  | null;
}
