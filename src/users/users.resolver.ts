import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import {
    CreateAccountInput,
    createAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';

@Resolver((of) => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) { }

    @Query((returns) => Boolean)
    Users() {
        return true;
    }

    @Mutation((returns) => createAccountOutput)
    async createAccount(
        @Args('input') createAccountInput: CreateAccountInput,
    ): Promise<createAccountOutput> {
        try {
            const res = await this.userService.createAccount(createAccountInput);
            return res;
        } catch (error) {
            return {
                ok: false,
                error,
            };
        }
    }

    //登陆
    @Mutation((returns) => LoginOutput)
    async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
        try {
            const res = await this.userService.login(loginInput);
            return res;
        } catch (error) {
            console.log(error);


        }

    }

    //after build jwt module ,we can auth the user use jwt that users query with it in header like 'x-jwt'
    @Query((returns) => User)
    me() {
        return null;
    }
}


