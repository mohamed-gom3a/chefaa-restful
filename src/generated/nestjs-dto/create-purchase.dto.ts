
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsInt,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreatePurchaseDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
totalPrice: Prisma.Decimal ;
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
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
reviewComment?: string  | null;
}
