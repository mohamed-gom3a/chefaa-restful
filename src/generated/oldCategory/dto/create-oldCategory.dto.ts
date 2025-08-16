
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateOldCategoryDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
name: string ;
}
