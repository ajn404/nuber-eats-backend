import {
    Field,
    InputType,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { CoreEntities } from 'src/common/entities/core.entities';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { IsEmail, IsEnum } from 'class-validator';

enum UserRole {
    Client,
    Owner,
    Delivery,
}
registerEnumType(UserRole, { name: 'UserRole' });
@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntities {
    @Column()
    @Field((type) => String)
    @IsEmail()
    email: string;

    @Column()
    @Field((type) => String)
    password: string;

    @IsEnum(UserRole)
    //database
    @Column({ type: 'enum', enum: UserRole })
    //graphql
    @Field((type) => UserRole)
    role: UserRole;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (e) {
            throw new InternalServerErrorException();
        }
    }

    async checkPassword(aPassword: string): Promise<boolean> {
        try {
            const res = await bcrypt.compare(aPassword, this.password)
            return res;
        }
        catch (e) {
            console.log(e)
            throw new InternalServerErrorException();
        }
    }
}
