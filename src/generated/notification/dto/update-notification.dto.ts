
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsEnum,IsOptional,IsString} from 'class-validator'




export class UpdateNotificationDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
message?: string ;
@ApiProperty({
  type: 'boolean',
  required: false,
})
@IsOptional()
@IsBoolean()
isImportant?: boolean ;
@ApiProperty({
  enum: NotificationType,
  enumName: 'NotificationType',
  required: false,
  nullable: true,
})
@IsOptional()
@IsEnum(NotificationType)
notificationType?: NotificationType  | null;
}
