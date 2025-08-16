import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateMedicationDto as GeneratedDto } from 'src/generated/medication/dto/create-medication.dto';

export class CreateMedicationDto extends OmitType(GeneratedDto, [
  'price',
] as const) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price must be a number with up to 2 decimals' },
  )
  price: number | Prisma.Decimal;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  stock: number;

  @ApiProperty()
  @IsInt()
  categoryId: number;
}
