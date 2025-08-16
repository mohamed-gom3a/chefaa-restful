
import {ApiExtraModels,ApiProperty} from '@nestjs/swagger'
import {IsInt,IsNotEmpty,IsOptional,IsString,ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'

export class WishlistItemUserIdMedicationIdUniqueInputDto {
    @ApiProperty()
@IsNotEmpty()
@IsString()
userId: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
medicationId: number ;
  }

@ApiExtraModels(WishlistItemUserIdMedicationIdUniqueInputDto)
export class ConnectWishlistItemDto {
  @ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
id?: string ;
@ApiProperty({
  type: WishlistItemUserIdMedicationIdUniqueInputDto,
  required: false,
  nullable: true,
})
@IsOptional()
@ValidateNested()
@Type(() => WishlistItemUserIdMedicationIdUniqueInputDto)
userId_medicationId?: WishlistItemUserIdMedicationIdUniqueInputDto ;
}
