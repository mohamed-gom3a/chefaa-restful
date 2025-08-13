import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserCartQueryDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  userId: string;
}
