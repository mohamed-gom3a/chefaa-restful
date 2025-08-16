
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class ConnectCartItemDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
id: string ;
}
