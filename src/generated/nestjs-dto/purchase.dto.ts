
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class PurchaseDto {
  @ApiProperty()
id: string ;
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
