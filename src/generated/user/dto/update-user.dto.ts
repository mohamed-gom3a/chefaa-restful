
import {Gender,Country} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateUserDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
email?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
password?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
name?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
address?: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
@IsOptional()
@IsInt()
phone?: number  | null;
@ApiProperty({
  enum: Gender,
  required: false,
  nullable: true,
})
@IsOptional()
gender?: Gender  | null;
@ApiProperty({
  enum: Country,
  default: 'EG',
  required: false,
  nullable: true,
})
@IsOptional()
country?: Country  | null;
}
