import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query((returns) => Boolean)
  Users() {
    return true;
  }
}
