
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdatePrescriptionDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
description?: string  | null;
}
