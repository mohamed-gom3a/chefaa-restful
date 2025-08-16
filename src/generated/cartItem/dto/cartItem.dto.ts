
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class CartItemDto {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
price: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
quantity: number ;
}
