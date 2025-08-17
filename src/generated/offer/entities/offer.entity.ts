
import {AmountType,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Medication} from '../../medication/entities/medication.entity'


export class Offer {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
amount: Prisma.Decimal ;
@ApiProperty({
  enum: AmountType,
  enumName: 'AmountType',
})
amountType: AmountType ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
position: number ;
@ApiProperty({
  type: 'boolean',
})
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
@ApiProperty({
  type: () => Medication,
  required: false,
})
medication?: Medication ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
}
