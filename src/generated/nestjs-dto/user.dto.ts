
import {Gender,Country,Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class UserDto {
  @ApiProperty()
id: string ;
@ApiProperty()
email: string ;
@ApiProperty()
password: string ;
@ApiProperty({
  nullable: true,
})
name: string  | null;
@ApiProperty({
  nullable: true,
})
address: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
phone: number  | null;
@ApiProperty({
  enum: Gender,
  nullable: true,
})
gender: Gender  | null;
@ApiProperty({
  enum: Country,
  nullable: true,
})
country: Country  | null;
@ApiProperty({
  enum: Role,
})
role: Role ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
}
