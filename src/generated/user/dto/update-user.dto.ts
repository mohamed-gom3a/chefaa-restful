
import {Country,Gender} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsEnum,IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateUserDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
email?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
password?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
name?: string  | null;
@ApiProperty({
  type: 'string',
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
  enumName: 'Gender',
  required: false,
  nullable: true,
})
@IsOptional()
@IsEnum(Gender)
gender?: Gender  | null;
@ApiProperty({
  enum: Country,
  enumName: 'Country',
  default: 'EG',
  required: false,
  nullable: true,
})
@IsOptional()
@IsEnum(Country)
country?: Country  | null;
}
