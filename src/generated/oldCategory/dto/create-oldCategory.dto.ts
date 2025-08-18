
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateOldCategoryDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
id: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
name: string ;
}
