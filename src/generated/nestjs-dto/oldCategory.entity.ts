
import {ApiProperty} from '@nestjs/swagger'
import {Product} from './product.entity'


export class OldCategory {
  @ApiProperty()
id: string ;
@ApiProperty()
name: string ;
@ApiProperty({
  type: () => Product,
  isArray: true,
  required: false,
})
products?: Product[] ;
}
