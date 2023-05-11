import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable()
//@InjectRepository()装饰器将Restaurant实体注入到服务中
export class RestaurantService {
  constructor(
    //将TypeORM实体注入到nestjs服务中。
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const newRestaurant = this.restaurants.create(createRestaurantDto);
    return this.restaurants.save(newRestaurant);
  }
}
