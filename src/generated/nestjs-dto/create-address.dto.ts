
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsNumber,IsOptional,IsString} from 'class-validator'




export class CreateAddressDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
city: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
streetName: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
buildingNo?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
floor?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
apartment?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
landmark?: string  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
  nullable: true,
})
@IsOptional()
@IsNumber()
lat?: number  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
  nullable: true,
})
@IsOptional()
@IsNumber()
lng?: number  | null;
}
