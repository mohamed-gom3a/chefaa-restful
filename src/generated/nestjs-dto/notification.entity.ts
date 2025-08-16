
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'


export class Notification {
  @ApiProperty()
id: string ;
@ApiProperty()
message: string ;
@ApiProperty()
isImportant: boolean ;
@ApiProperty({
  enum: NotificationType,
  nullable: true,
})
notificationType: NotificationType  | null;
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
}
