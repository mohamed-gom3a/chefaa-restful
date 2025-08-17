
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class NotificationDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
message: string ;
@ApiProperty({
  type: 'boolean',
})
isImportant: boolean ;
@ApiProperty({
  enum: NotificationType,
  enumName: 'NotificationType',
  nullable: true,
})
notificationType: NotificationType  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
