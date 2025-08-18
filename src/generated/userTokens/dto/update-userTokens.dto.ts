
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateUserTokensDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
refreshToken?: string ;
@ApiProperty({
<<<<<<< HEAD
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
family?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
browserInfo?: string  | null;
@ApiProperty({
=======
>>>>>>> feature/super-category
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
expiresAt?: Date ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
family?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
browserInfo?: string  | null;
}
