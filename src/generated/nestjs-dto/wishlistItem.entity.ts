
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Medication} from './medication.entity'


export class WishlistItem {
  @ApiProperty()
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
@ApiProperty()
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
