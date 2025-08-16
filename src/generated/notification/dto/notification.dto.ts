
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class NotificationDto {
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
}
