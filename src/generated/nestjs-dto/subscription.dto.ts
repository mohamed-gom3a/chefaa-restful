
import {IntervalType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class SubscriptionDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  enum: IntervalType,
})
intervalType: IntervalType ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
nextRefillDate: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
lastRefillDate: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
endDate: Date  | null;
@ApiProperty({
  nullable: true,
})
isActive: boolean  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
