
import {Country,Gender,Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class UserDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
email: string ;
@ApiProperty({
  type: 'string',
})
password: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
name: string  | null;
@ApiProperty({
  type: 'string',
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
  enumName: 'Gender',
  nullable: true,
})
gender: Gender  | null;
@ApiProperty({
  enum: Country,
  enumName: 'Country',
  nullable: true,
})
country: Country  | null;
@ApiProperty({
  enum: Role,
  enumName: 'Role',
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
