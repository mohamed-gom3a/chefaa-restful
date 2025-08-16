
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateBundleDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
name?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
description?: string  | null;
}
