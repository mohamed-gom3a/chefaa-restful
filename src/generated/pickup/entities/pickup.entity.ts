
import {PickupStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Order} from '../../order/entities/order.entity'


export class Pickup {
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
@ApiProperty({
  type: 'string',
})
orderId: string ;
@ApiProperty({
  type: () => Order,
  required: false,
})
order?: Order ;
<<<<<<< HEAD
@ApiProperty({
  type: 'string',
})
orderId: string ;
=======
>>>>>>> feature/super-category
}
