
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class ConnectPickupDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
id?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
orderId?: string ;
}
