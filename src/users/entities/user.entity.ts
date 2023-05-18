import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntities } from 'src/common/entities/core.entities';
import { BeforeInsert, Column, Entity, In } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

enum UserRole {
    Client,
    Owner,
    Delivery
}
registerEnumType(UserRole, { name: 'UserRole' })
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

    //database
    @Column({ type: 'enum', enum: UserRole })
    //graphql
    @Field(type => UserRole)
    role: UserRole;



    @BeforeInsert()
    async hashPassword(): Promise<void> {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        }
        catch (e) {
            throw new InternalServerErrorException();
        }
    }
}


