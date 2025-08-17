
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class ConnectUserTokensDto {
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
family?: string ;
}
