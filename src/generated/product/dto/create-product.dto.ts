
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateProductDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
id: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
name: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
picture?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
@IsNotEmpty()
@IsDecimal()
basePrice: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
description?: string  | null;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
urlName: string ;
}
