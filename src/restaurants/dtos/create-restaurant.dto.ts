import { ArgsType, Field, InputType } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field((type) => String, { nullable: true })
  address?: string;
  @Field((type) => String, { nullable: true })
  ownerName?: string;
}
