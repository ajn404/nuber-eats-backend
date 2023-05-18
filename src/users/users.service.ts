import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateAccountInput, createAccountOutput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) {
    }

    async createAccount({ email, password, role }: CreateAccountInput): Promise<createAccountOutput> {
        //create user & hash the password
        try {
            const exists = await this.users.findOne({
                where: { email }
            }
            );
            if (exists) {
                return {
                    ok: false,
                    error: "该邮箱已经被注册了哦"
                }
            }
            const user = await this.users.create({ email, password, role });
            await this.users.save(user)
            return {
                ok: true,
            };

        }
        catch (e) {
            return {
                ok: false,
                error: "账号创建失败"
            }

        }

    }

}
