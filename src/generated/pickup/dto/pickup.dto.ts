
import {PickupStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class PickupDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  enum: PickupStatus,
  enumName: 'PickupStatus',
})
pickupStatus: PickupStatus ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
pharmacyAddress: string  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  nullable: true,
})
pharmacyLat: number  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  nullable: true,
})
pharmacyLng: number  | null;
}
