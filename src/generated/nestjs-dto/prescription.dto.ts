
import {ApiProperty} from '@nestjs/swagger'


export class PrescriptionDto {
  @ApiProperty()
id: string ;
@ApiProperty({
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
}
