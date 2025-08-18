
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsInt,IsOptional,IsString} from 'class-validator'




export class UpdatePurchaseDto {
  @ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
})
@IsOptional()
@IsDecimal()
totalPrice?: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
@IsOptional()
@IsInt()
reviewNote?: number  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
reviewComment?: string  | null;
}
