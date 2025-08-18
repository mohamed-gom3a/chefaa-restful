
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Product} from '../../product/entities/product.entity'
import {User} from '../../user/entities/user.entity'


export class Purchase {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
userId: string  | null;
@ApiProperty({
  type: 'string',
})
productId: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
amount: number ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
reviewNote: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
reviewComment: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: () => Product,
  required: false,
})
Product?: Product ;
@ApiProperty({
  type: () => User,
  required: false,
  nullable: true,
})
User?: User  | null;
}
