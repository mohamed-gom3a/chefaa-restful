
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsOptional,IsString} from 'class-validator'




export class UpdateProductDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
name?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
urlName?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
picture?: string  | null;
@ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
})
@IsOptional()
@IsDecimal()
basePrice?: Prisma.Decimal ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
description?: string  | null;
}
