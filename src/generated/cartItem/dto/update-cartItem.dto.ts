
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsInt,IsOptional} from 'class-validator'




export class UpdateCartItemDto {
  @ApiProperty({
  type: 'string',
  format: 'Decimal.js',
  required: false,
})
@IsOptional()
@IsDecimal()
price?: Prisma.Decimal ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
quantity?: number ;
}
