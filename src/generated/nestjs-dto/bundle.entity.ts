
import {ApiProperty} from '@nestjs/swagger'
import {Medication} from './medication.entity'


export class Bundle {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty({
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
