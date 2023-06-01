import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { table } from "console";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const gqlContext = GqlExecutionContext.create(context).getContext();
        console.log("gqlContext", gqlContext);
        console.table(gqlContext)
        const user = gqlContext['user'];
        console.log("user", user);
        return !!user;
    }
}