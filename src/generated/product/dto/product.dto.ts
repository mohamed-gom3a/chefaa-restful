
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ProductDto {
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
}
