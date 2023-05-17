import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntities } from 'src/common/entities/core.entities';
import { Column, Entity } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()

@Entity()
export class User extends CoreEntities {
    @Column()
    @Field(type => String)
    email: string;

    @Column()
    @Field(type => String)

    password: string;

    @Column()
    @Field(type => String)

    role: string;
}

console.log('user', User);

