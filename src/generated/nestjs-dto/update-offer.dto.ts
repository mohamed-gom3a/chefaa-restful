
import {Prisma,AmountType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsInt,IsOptional} from 'class-validator'




export class UpdateOfferDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
})
@IsOptional()
@IsDecimal()
amount?: Prisma.Decimal ;
@ApiProperty({
  enum: AmountType,
  required: false,
})
@IsOptional()
amountType?: AmountType ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
position?: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
validFrom?: Date ;
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
