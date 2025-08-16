
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateUserTokensDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
refreshToken: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
family: string ;
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
})
@IsNotEmpty()
@IsDateString()
expiresAt: Date ;
}
