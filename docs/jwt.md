```shell
nest g mo jwt
```

申明 forRoot 方法返回 dynamicModule
jst.module.ts

```ts
import { DynamicModule, Module } from '@nestjs/common';
@Module({})
export class JwtModule {
  static forRoot(): DynamicModule {
    return {
      module: JwtModule,
    };
  }
}
```

```shell
nest g s jwt
```

## middleware

在 main.ts 中注册或者在 app module 中注册
main.ts
`app.use(jwtMiddleware)`
app.module.ts

```ts
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes({
      path: '/graphql',
      method: RequestMethod.ALL,
    });
  }
}
```
