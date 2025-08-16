
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {OldCategory} from './oldCategory.entity'
import {Purchase} from './purchase.entity'


export class Product {
  @ApiProperty()
id: string ;
@ApiProperty()
name: string ;
@ApiProperty()
urlName: string ;
@ApiProperty({
  nullable: true,
})
picture: string  | null;
@ApiProperty({
  type: 'number',
  format: 'double',
})
basePrice: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
discountPercentage: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
stock: number ;
@ApiProperty({
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: () => OldCategory,
  isArray: true,
  required: false,
})
categories?: OldCategory[] ;
@ApiProperty({
  type: () => Purchase,
  isArray: true,
  required: false,
})
Purchase?: Purchase[] ;
}
