
import {ApiProperty} from '@nestjs/swagger'
import {IsNumber,IsOptional,IsString} from 'class-validator'




export class UpdatePickupDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
pharmacyAddress?: string  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
  nullable: true,
})
@IsOptional()
@IsNumber()
pharmacyLat?: number  | null;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
  nullable: true,
})
@IsOptional()
@IsNumber()
pharmacyLng?: number  | null;
}
