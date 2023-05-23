## createAccount

```txt
mutation{
  createAccount(input:{
    email:"huiyuening00@gmail.com",
    password:"123456",
    role:Owner,
  }){
    ok,
    error
  }
}
```

### IntrospectionQuery

IntrospectionQuery 是 GraphQL 的一个内省系统，它可以查询 GraphQL 模式支持的查询信息。通过内省，我们可以查看 API 支持的查询、类型、字段和指令

### apollo server

Apollo Server 是一个开源的、符合规范的 GraphQL 服务器，它与任何 GraphQL 客户端兼容，包括 Apollo 客户端。它是构建一个生产就绪、自文档化的 GraphQL API 的最佳方式，可以使用来自任何来源的数据 1

[apollo server](https://www.apollographql.com/docs/apollo-server/)


### graphql-voyager

是一个用于可视化 GraphQL schema 的工具。它可以帮助您更好地理解您的 GraphQL API 的结构。

在 NestJS 中使用 graphql-voyager 的方法取决于您的具体需求。您可以将 graphql-voyager 作为一个中间件添加到您的 NestJS 应用程序中，或者将其作为一个独立的服务运行。

如果您想将 graphql-voyager 作为一个中间件添加到您的 NestJS 应用程序中，您可以使用 express-voyager 包。首先，您需要安装 express-voyager 包，例如通过运行 npm install express-voyager 命令。然后，您可以在您的 NestJS 应用程序中添加一个中间件来使用 express-voyager。

下面是一个简单的示例，演示如何在 NestJS 中添加一个使用 express-voyager 的中间件：

```ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import voyagerMiddleware from 'express-voyager';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // ...
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(voyagerMiddleware({ endpointUrl: '/graphql' })).forRoutes('/voyager');
  }
}
```
在上面的示例中，我们使用了 express-voyager 包提供的 voyagerMiddleware 函数来创建一个中间件。我们将这个中间件应用于 /voyager 路径，并指定了 GraphQL endpoint 的 URL（在本例中为 /graphql）。

现在，当您访问 /voyager 路径时，您应该能够看到 graphql-voyager 的界面，并且可以使用它来可视化您的 GraphQL schema。

### 然而根本没有express-voyager这个库，md人工智能又开始糊弄人了

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
    //   app.use(new JwtMiddleware().use);
    await app.listen(3000);
}
bootstrap();

```


