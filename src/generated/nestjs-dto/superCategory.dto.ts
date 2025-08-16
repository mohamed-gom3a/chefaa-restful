
import {ApiProperty} from '@nestjs/swagger'


export class SuperCategoryDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty({
  nullable: true,
})
image: string  | null;
}
