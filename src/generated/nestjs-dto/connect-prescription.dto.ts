
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class ConnectPrescriptionDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
id: string ;
}
