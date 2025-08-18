
import {ApiProperty} from '@nestjs/swagger'
import {Product} from '../../product/entities/product.entity'


export class OldCategory {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: () => Product,
  isArray: true,
  required: false,
})
Product?: Product[] ;
}
