
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class ConnectCouponDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
id?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
code?: string ;
}
