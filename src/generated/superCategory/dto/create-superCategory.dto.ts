
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateSuperCategoryDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
name: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
image?: string  | null;
}
