
import {PickupStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from '../../order/entities/order.entity'


export class Pickup {
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
@ApiProperty({
  type: () => Order,
  required: false,
})
order?: Order ;
@ApiProperty()
orderId: string ;
}
