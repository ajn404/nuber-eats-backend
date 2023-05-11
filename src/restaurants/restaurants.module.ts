import { Module } from '@nestjs/common';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantsResolver, RestaurantService],
  /**
   * 我们创建了一个名为RestaurantsModule的nestjs模块，
   * 并使用TypeOrmModule.forFeature()方法将Restaurant实体添加到模块中。
   * 这将使得我们可以在Service中使用TypeORM来访问和操作Restaurant实体。
   * / */
})
export class RestaurantsModule {}
