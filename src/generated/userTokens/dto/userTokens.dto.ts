
import {ApiProperty} from '@nestjs/swagger'


export class UserTokensDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
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
