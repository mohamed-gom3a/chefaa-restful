
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ProductDto {
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
}
