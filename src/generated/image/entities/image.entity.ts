
import {ApiProperty} from '@nestjs/swagger'
import {Prescription} from '../../prescription/entities/prescription.entity'


export class Image {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
url: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
prescriptionId: string  | null;
@ApiProperty({
  type: () => Prescription,
  required: false,
  nullable: true,
})
prescription?: Prescription  | null;
<<<<<<< HEAD
@ApiProperty({
  type: 'string',
  nullable: true,
})
prescriptionId: string  | null;
=======
>>>>>>> feature/super-category
}
