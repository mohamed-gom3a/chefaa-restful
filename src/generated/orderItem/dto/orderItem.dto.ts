
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class OrderItemDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
price: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
quantity: number ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
discountAmount: Prisma.Decimal ;
}
