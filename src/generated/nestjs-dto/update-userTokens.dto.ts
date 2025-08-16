
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateUserTokensDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
refreshToken?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
family?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
browserInfo?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
expiresAt?: Date ;
}
