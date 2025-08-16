
import {DeliveryStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsNumber,IsOptional,IsString} from 'class-validator'




export class CreateDeliveryDto {
  @ApiProperty({
  enum: DeliveryStatus,
  required: false,
  nullable: true,
})
@IsOptional()
deliveryStatus?: DeliveryStatus  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
trackingNumber?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
deliveryAddress?: string  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
  nullable: true,
})
@IsOptional()
@IsNumber()
deliveryLat?: number  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
  nullable: true,
})
@IsOptional()
@IsNumber()
deliveryLng?: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
outAt?: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
estimatedAt?: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
completedAt?: Date  | null;
}
