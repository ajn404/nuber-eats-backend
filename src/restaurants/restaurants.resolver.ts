import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query((returns) => Restaurant)
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }

  @Mutation((returns) => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantInput: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantInput);
      return true;
    } catch (e) {
      console.log(e);
      return e;
    }

    // return true;
  }
}
