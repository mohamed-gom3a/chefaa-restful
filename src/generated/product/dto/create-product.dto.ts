
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateProductDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
name: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
urlName: string ;
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
})
@IsNotEmpty()
@IsDecimal()
basePrice: Prisma.Decimal ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
description?: string  | null;
}
