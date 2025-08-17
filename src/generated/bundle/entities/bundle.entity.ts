
import {ApiProperty} from '@nestjs/swagger'
import {Medication} from '../../medication/entities/medication.entity'


export class Bundle {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: () => Medication,
  isArray: true,
  required: false,
})
medications?: Medication[] ;
}
