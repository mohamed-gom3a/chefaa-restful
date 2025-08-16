
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class ConnectOrderItemDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
id: string ;
}
