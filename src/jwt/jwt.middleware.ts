import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
export class JwtMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        console.log(req.headers);

        next();
    }
}

