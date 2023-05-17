import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';

@Resolver((of) => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) { }

    @Query((returns) => Boolean)
    Users() {
        return true;
    }

    @Mutation((returns) => User)
    async createAccount(@Args('input') createAccountInput: CreateAccountInput) { }
}
