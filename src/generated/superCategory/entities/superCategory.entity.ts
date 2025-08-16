
import {ApiProperty} from '@nestjs/swagger'
import {Category} from '../../category/entities/category.entity'


export class SuperCategory {
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
@ApiProperty({
  type: () => Category,
  isArray: true,
  required: false,
})
categories?: Category[] ;
}
