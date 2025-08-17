
import {ApiProperty} from '@nestjs/swagger'
import {SuperCategory} from '../../superCategory/entities/superCategory.entity'
import {Medication} from '../../medication/entities/medication.entity'


export class Category {
  @ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
image: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
superCategoryId: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: () => SuperCategory,
  required: false,
})
superCategory?: SuperCategory ;
@ApiProperty({
  type: () => Medication,
  isArray: true,
  required: false,
})
medications?: Medication[] ;
}
