
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class MedicationDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
urlName: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
price: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
stock: number ;
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
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
sellingCount: number ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
image: string  | null;
}
