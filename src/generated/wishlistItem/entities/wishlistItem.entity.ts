
import {ApiProperty} from '@nestjs/swagger'
import {Medication} from '../../medication/entities/medication.entity'
import {User} from '../../user/entities/user.entity'


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
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
medicationId: number ;
@ApiProperty({
  type: () => Medication,
  required: false,
})
medication?: Medication ;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
}
