
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateMedicationDto {
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
<<<<<<< HEAD
urlName?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
=======
>>>>>>> feature/super-category
description?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'Decimal.js',
})
@IsNotEmpty()
@IsDecimal()
price: Prisma.Decimal ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
image?: string  | null;
<<<<<<< HEAD
=======
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
urlName?: string  | null;
>>>>>>> feature/super-category
}
