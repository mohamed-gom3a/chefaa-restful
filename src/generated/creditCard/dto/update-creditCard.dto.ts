
import {ApiProperty} from '@nestjs/swagger'
import {IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateCreditCardDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
last4?: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
expiryMonth?: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
expiryYear?: number ;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
token?: string ;
}
