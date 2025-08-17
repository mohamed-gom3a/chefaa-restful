
import {ApiProperty} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'


export class CreditCard {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
last4: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
expiryMonth: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
expiryYear: number ;
@ApiProperty({
  type: 'string',
})
token: string ;
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
  type: () => User,
  required: false,
})
user?: User ;
}
