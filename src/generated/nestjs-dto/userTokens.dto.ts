
import {ApiProperty} from '@nestjs/swagger'


export class UserTokensDto {
  @ApiProperty()
id: string ;
@ApiProperty()
refreshToken: string ;
@ApiProperty()
family: string ;
@ApiProperty({
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
