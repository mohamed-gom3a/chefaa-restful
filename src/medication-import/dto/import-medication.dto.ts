import { IsString, IsNumber, IsOptional, IsPositive, IsUrl } from 'class-validator';

export class ImportMedicationDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  stock?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  sellingCount?: number;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @IsOptional()
  @IsNumber()
  bundleId?: number;
}
