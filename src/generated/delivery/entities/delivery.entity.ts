
import {DeliveryStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DeliveryOption} from '../../deliveryOption/entities/deliveryOption.entity'
import {Order} from '../../order/entities/order.entity'


export class Delivery {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  enum: DeliveryStatus,
  enumName: 'DeliveryStatus',
  nullable: true,
})
deliveryStatus: DeliveryStatus  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
trackingNumber: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
deliveryAddress: string  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  nullable: true,
})
deliveryLat: number  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  nullable: true,
})
deliveryLng: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
outAt: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
estimatedAt: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
completedAt: Date  | null;
@ApiProperty({
  type: () => DeliveryOption,
  required: false,
  nullable: true,
})
deliveryOption?: DeliveryOption  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
deliveryOptionId: number  | null;
@ApiProperty({
  type: () => Order,
  required: false,
})
order?: Order ;
@ApiProperty({
  type: 'string',
})
orderId: string ;
}
