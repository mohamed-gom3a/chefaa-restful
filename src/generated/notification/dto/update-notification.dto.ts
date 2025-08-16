
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsOptional,IsString} from 'class-validator'




export class UpdateNotificationDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
message?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsBoolean()
isImportant?: boolean ;
@ApiProperty({
  enum: NotificationType,
  required: false,
  nullable: true,
})
@IsOptional()
notificationType?: NotificationType  | null;
}
