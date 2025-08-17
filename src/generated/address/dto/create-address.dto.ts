
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsNumber,IsOptional,IsString} from 'class-validator'




export class CreateAddressDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
city: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
streetName: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
buildingNo?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
floor?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
apartment?: string  | null;
@ApiProperty({
  type: 'string',
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
