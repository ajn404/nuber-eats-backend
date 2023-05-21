import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from './jwt.service';
import { UsersService } from 'src/users/users.service';
// export const JwtMiddleware = (
//   req: Request,
//   res: Response,
//   next: () => void,
// ) => {
//   const token_key = 'x-jwt';
//   const token = req.headers[token_key];
//   console.log('header token', token);

//   next();
// };
@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token_key = 'x-jwt';
    const token = req.headers[token_key];
    if (token) {
      const decode = this.jwtService.verify(token.toString());
      if (typeof decode === 'object' && decode.hasOwnProperty('id')) {
        try {
          const user = await this.userService.findById(decode['id']);
          req['user'] = user;
        } catch (e) {}
      }
    }

    next();
  }
}
