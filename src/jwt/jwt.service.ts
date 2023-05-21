import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.constances';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class JwtService {
  constructor(
    @Inject('JwtModuleOptions')
    private readonly jwtSecret: JwtModuleOptions,
  ) {}

  sign(userId: number): string {
    //use jwt
    return jwt.sign({ id: userId }, this.jwtSecret.privateKey);
  }

  verify(token: string) {
    return jwt.verify(token, this.jwtSecret.privateKey);
  }
}
