
import {AddressType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'


export class Address {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
city: string ;
@ApiProperty({
  type: 'string',
})
streetName: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
buildingNo: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
floor: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
apartment: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
landmark: string  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  nullable: true,
})
lat: number  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  nullable: true,
})
lng: number  | null;
@ApiProperty({
  enum: AddressType,
  enumName: 'AddressType',
})
addressType: AddressType ;
@ApiProperty({
  type: 'boolean',
})
isDefault: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
}
