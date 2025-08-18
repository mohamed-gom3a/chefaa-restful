
import {ApiProperty} from '@nestjs/swagger'


export class UserTokensDto {
  @ApiProperty({
  type: 'string',
<<<<<<< HEAD
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
=======
>>>>>>> feature/super-category
})
id: string ;
@ApiProperty({
  type: 'string',
})
refreshToken: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expiresAt: Date ;
@ApiProperty({
  type: 'string',
})
family: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
browserInfo: string  | null;
}
