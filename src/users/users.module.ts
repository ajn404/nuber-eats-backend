import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  //现在并不需要在这里导入ConfigService
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
