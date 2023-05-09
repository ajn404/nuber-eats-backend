import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Restaurant {
  @Field((type) => String, { nullable: true })
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field((type) => String, { nullable: true })
  address?: string;
  @Field((type) => String, { nullable: true })
  ownerName?: string;
}
