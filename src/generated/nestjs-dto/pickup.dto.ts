
import {PickupStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class PickupDto {
  @ApiProperty()
id: string ;
@ApiProperty({
  enum: PickupStatus,
})
pickupStatus: PickupStatus ;
@ApiProperty({
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
