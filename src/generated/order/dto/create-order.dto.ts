
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class CreateOrderDto {
  @ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
orderNote?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
paymentName?: string  | null;
}
