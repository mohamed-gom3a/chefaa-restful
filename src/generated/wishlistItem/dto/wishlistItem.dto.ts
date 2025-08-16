
import {ApiProperty} from '@nestjs/swagger'


export class WishlistItemDto {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
