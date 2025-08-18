
import {ApiProperty} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'


export class UserTokens {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
<<<<<<< HEAD
user?: User ;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: 'string',
})
refreshToken: string ;
@ApiProperty({
  type: 'string',
})
family: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
=======
userId: string ;
@ApiProperty({
  type: 'string',
>>>>>>> feature/super-category
})
refreshToken: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expiresAt: Date ;
@ApiProperty({
  type: 'string',
})
family: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
browserInfo: string  | null;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
}
