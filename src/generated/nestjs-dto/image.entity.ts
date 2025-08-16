
import {ApiProperty} from '@nestjs/swagger'
import {Prescription} from './prescription.entity'


export class Image {
  @ApiProperty()
id: string ;
@ApiProperty()
url: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: () => Prescription,
  required: false,
  nullable: true,
})
prescription?: Prescription  | null;
@ApiProperty({
  nullable: true,
})
prescriptionId: string  | null;
}
