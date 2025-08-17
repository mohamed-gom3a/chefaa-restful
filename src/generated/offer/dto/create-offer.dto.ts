
import {AmountType,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsDecimal,IsEnum,IsInt,IsNotEmpty,IsOptional} from 'class-validator'




export class CreateOfferDto {
  @ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
@IsNotEmpty()
@IsDecimal()
amount: Prisma.Decimal ;
@ApiProperty({
  enum: AmountType,
  enumName: 'AmountType',
})
@IsNotEmpty()
@IsEnum(AmountType)
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
