
import {ApiProperty} from '@nestjs/swagger'
import {IsInt,IsOptional,IsString} from 'class-validator'




export class ConnectMedicationDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
@IsOptional()
@IsInt()
id?: number ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
urlName?: string ;
}
