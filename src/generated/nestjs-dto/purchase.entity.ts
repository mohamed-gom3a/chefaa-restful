
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Product} from './product.entity'


export class Purchase {
  @ApiProperty()
id: string ;
@ApiProperty({
  type: () => User,
  required: false,
  nullable: true,
})
user?: User  | null;
@ApiProperty({
  nullable: true,
})
userId: string  | null;
@ApiProperty({
  type: () => Product,
  required: false,
})
product?: Product ;
@ApiProperty()
productId: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
amount: number ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
reviewNote: number  | null;
@ApiProperty({
  nullable: true,
})
reviewComment: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
