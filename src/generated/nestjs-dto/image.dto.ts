
import {ApiProperty} from '@nestjs/swagger'


export class ImageDto {
  @ApiProperty()
id: string ;
@ApiProperty()
url: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
