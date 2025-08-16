
import {Prisma,AmountType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class OfferDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
amount: Prisma.Decimal ;
@ApiProperty({
  enum: AmountType,
})
amountType: AmountType ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
position: number ;
@ApiProperty()
active: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
validFrom: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
validUntil: Date  | null;
}
