
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsEnum,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateNotificationDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
message: string ;
@ApiProperty({
  type: 'boolean',
})
@IsNotEmpty()
@IsBoolean()
isImportant: boolean ;
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
