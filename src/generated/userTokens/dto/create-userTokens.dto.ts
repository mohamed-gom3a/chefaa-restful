
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateUserTokensDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
refreshToken: string ;
<<<<<<< HEAD
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
family: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
browserInfo?: string  | null;
=======
>>>>>>> feature/super-category
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
expiresAt: Date ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
family: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
browserInfo?: string  | null;
}
