
import {ApiProperty} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'


export class UserTokens {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
@ApiProperty()
userId: string ;
@ApiProperty()
refreshToken: string ;
@ApiProperty()
family: string ;
@ApiProperty({
  nullable: true,
})
browserInfo: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expiresAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
