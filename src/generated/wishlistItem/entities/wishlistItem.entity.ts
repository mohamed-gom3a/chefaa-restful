
import {ApiProperty} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'
import {Medication} from '../../medication/entities/medication.entity'


export class WishlistItem {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: () => Medication,
  required: false,
})
medication?: Medication ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
}
