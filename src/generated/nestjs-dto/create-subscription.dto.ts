
import {IntervalType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDateString,IsNotEmpty,IsOptional} from 'class-validator'




export class CreateSubscriptionDto {
  @ApiProperty({
  enum: IntervalType,
})
@IsNotEmpty()
intervalType: IntervalType ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
nextRefillDate: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
lastRefillDate?: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
endDate?: Date  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsBoolean()
isActive?: boolean  | null;
}
