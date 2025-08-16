
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateOldCategoryDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
name?: string ;
}
