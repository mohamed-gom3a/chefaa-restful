
import {ApiProperty} from '@nestjs/swagger'
import {SuperCategory} from '../../superCategory/entities/superCategory.entity'
import {Medication} from '../../medication/entities/medication.entity'


export class Category {
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
  type: () => SuperCategory,
  required: false,
})
superCategory?: SuperCategory ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
superCategoryId: number ;
@ApiProperty({
  type: () => Medication,
  isArray: true,
  required: false,
})
medications?: Medication[] ;
}
