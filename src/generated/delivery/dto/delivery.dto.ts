
import {DeliveryStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DeliveryDto {
  @ApiProperty()
id: string ;
@ApiProperty({
  enum: DeliveryStatus,
  nullable: true,
})
deliveryStatus: DeliveryStatus  | null;
@ApiProperty({
  nullable: true,
})
trackingNumber: string  | null;
@ApiProperty({
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
}
