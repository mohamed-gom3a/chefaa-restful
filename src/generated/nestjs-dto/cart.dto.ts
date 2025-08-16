import { ApiProperty } from '@nestjs/swagger';
import { CartStatus, Prisma } from '@prisma/client';

export class CartDto {
  @ApiProperty()
  id: string;
  @ApiProperty({
    type: 'number',
    format: 'double',
  })
  totalPrice: Prisma.Decimal;
  @ApiProperty({
    enum: CartStatus,
  })
  cartStatus: CartStatus;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
}
