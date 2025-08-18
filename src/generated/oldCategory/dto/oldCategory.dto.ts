
import {ApiProperty} from '@nestjs/swagger'


export class OldCategoryDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
}
