
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class CreatePrescriptionDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
description?: string  | null;
}
