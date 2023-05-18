import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateAccountInput, createAccountOutput } from './dtos/create-account.dto';

@Resolver((of) => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) { }

    @Query((returns) => Boolean)
    Users() {
        return true;
    }

    @Mutation((returns) => createAccountOutput)
    async createAccount(@Args('input') createAccountInput: CreateAccountInput): Promise<createAccountOutput> {
        try {
            const res = await this.userService.createAccount(createAccountInput);
            return res;
        }
        catch (error) {
            return {
                ok: false,
                error
            }
        }

    }
}
