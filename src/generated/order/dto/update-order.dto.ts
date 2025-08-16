
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateOrderDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
orderNote?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
paymentName?: string  | null;
}
