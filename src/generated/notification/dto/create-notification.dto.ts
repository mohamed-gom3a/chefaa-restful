
import {NotificationType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateNotificationDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
message: string ;
@ApiProperty()
@IsNotEmpty()
@IsBoolean()
isImportant: boolean ;
@ApiProperty({
  enum: NotificationType,
  required: false,
  nullable: true,
})
@IsOptional()
notificationType?: NotificationType  | null;
}
