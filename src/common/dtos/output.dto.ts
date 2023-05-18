import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class mutationOutput {
  @Field(() => String)
  ok?: boolean;
  @Field(() => String, { nullable: true })
  error?: string;
}
