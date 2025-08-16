
import {Prisma,OrderStatus,ContactPreference,ConflictSolution,PaymentMethod} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class OrderDto {
  @ApiProperty()
id: string ;
@ApiProperty({
  enum: OrderStatus,
})
orderStatus: OrderStatus ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
subtotalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
discountAmount: Prisma.Decimal ;
@ApiProperty({
  nullable: true,
})
orderNote: string  | null;
@ApiProperty({
  enum: ContactPreference,
})
contactPreference: ContactPreference ;
@ApiProperty({
  enum: ConflictSolution,
})
conflictSolution: ConflictSolution ;
@ApiProperty({
  enum: PaymentMethod,
})
paymentMethod: PaymentMethod ;
@ApiProperty({
  nullable: true,
})
paymentName: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
}
