
import {AddressType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'


export class Address {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
city: string ;
@ApiProperty()
streetName: string ;
@ApiProperty({
  nullable: true,
})
buildingNo: string  | null;
@ApiProperty({
  nullable: true,
})
floor: string  | null;
@ApiProperty({
  nullable: true,
})
apartment: string  | null;
@ApiProperty({
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
})
addressType: AddressType ;
@ApiProperty()
isDefault: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: () => User,
  required: false,
})
user?: User ;
@ApiProperty()
userId: string ;
}
