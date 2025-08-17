
import {ConflictSolution,ContactPreference,OrderStatus,PaymentMethod,Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class OrderDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  enum: OrderStatus,
  enumName: 'OrderStatus',
})
orderStatus: OrderStatus ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
subtotalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
totalPrice: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
discountAmount: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
orderNote: string  | null;
@ApiProperty({
  enum: ContactPreference,
  enumName: 'ContactPreference',
})
contactPreference: ContactPreference ;
@ApiProperty({
  enum: ConflictSolution,
  enumName: 'ConflictSolution',
})
conflictSolution: ConflictSolution ;
@ApiProperty({
  enum: PaymentMethod,
  enumName: 'PaymentMethod',
})
paymentMethod: PaymentMethod ;
@ApiProperty({
  type: 'string',
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
