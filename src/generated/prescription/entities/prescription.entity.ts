
import {ApiProperty} from '@nestjs/swagger'
import {Image} from '../../image/entities/image.entity'
import {Medication} from '../../medication/entities/medication.entity'


export class Prescription {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
validUntil: Date ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
@ApiProperty({
  type: () => Image,
  isArray: true,
  required: false,
})
images?: Image[] ;
@ApiProperty({
  type: () => Medication,
  required: false,
})
medication?: Medication ;
}
