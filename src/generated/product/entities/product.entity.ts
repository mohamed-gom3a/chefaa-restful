
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Purchase} from '../../purchase/entities/purchase.entity'
import {OldCategory} from '../../oldCategory/entities/oldCategory.entity'


export class Product {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
picture: string  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
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
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
})
urlName: string ;
@ApiProperty({
  type: () => Purchase,
  isArray: true,
  required: false,
})
Purchase?: Purchase[] ;
@ApiProperty({
  type: () => OldCategory,
  isArray: true,
  required: false,
})
OldCategory?: OldCategory[] ;
}
