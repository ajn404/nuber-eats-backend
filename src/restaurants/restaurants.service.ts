import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

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
}
