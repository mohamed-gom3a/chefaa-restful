
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class ConnectOldCategoryDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
id?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
name?: string ;
}
