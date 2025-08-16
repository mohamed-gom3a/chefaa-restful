
import {ApiProperty} from '@nestjs/swagger'


export class CreditCardDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
last4: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
expiryMonth: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
expiryYear: number ;
@ApiProperty()
token: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
}
