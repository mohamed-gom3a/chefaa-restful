
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class ConnectCartDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
id: string ;
}
