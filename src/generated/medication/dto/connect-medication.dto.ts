
import {ApiProperty} from '@nestjs/swagger'
import {IsInt,IsOptional,IsString} from 'class-validator'




export class ConnectMedicationDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
id?: number ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
urlName?: string ;
}
