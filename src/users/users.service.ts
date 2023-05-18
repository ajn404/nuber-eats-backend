import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import {
    CreateAccountInput,
    createAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) { }

    async createAccount({
        email,
        password,
        role,
    }: CreateAccountInput): Promise<createAccountOutput> {
        //create user & hash the password
        try {
            const exists = await this.users.findOne({
                where: { email },
            });
            if (exists) {
                return {
                    ok: false,
                    error: '该邮箱已经被注册了哦',
                };
            }
            const user = await this.users.create({ email, password, role });

            await this.users.save(user);
            return {
                ok: true,
            };
        } catch (e) {
            return {
                ok: false,
                error: '账号创建失败',
            };
        }
    }

    async login({
        email,
        password,
    }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
        //find the user with the email
        //check password
        //return token (jwt)
        try {
            const user = await this.users.findOne({
                where: { email },
            })
            if (!user) {
                return {
                    ok: false,
                    error: '用户不存在'
                }
            }

            const passwordCorrect = await user.checkPassword(password);

            if (!passwordCorrect) {
                return {
                    ok: false,
                    error: '密码错误'
                }
            }

            return {
                ok: true,
                token: "token"
            }


        }
        catch (error) {
            return {
                ok: false,
                error
            };
        }

    }
}
