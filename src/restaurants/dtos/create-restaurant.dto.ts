import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsEmpty, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  @IsEmpty()
  isVegan?: boolean;
  @Field((type) => String, { nullable: true })
  @IsEmpty()
  address?: string;
  @Field((type) => String, { nullable: true })
  @IsEmpty()
  ownerName?: string;
}
