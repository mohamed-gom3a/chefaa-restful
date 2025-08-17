
import {ApiProperty} from '@nestjs/swagger'
import {IsInt,IsNotEmpty,IsString} from 'class-validator'




export class CreateCreditCardDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
last4: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
expiryMonth: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
expiryYear: number ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
token: string ;
}
