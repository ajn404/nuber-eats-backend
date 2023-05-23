## Auth Gurad
Auth Guard 是一种用于保护路由免受未经授权访问的技术。它可以用于确保只有经过身份验证的用户才能访问特定的路由。例如，在 Angular 中，您可以使用 AuthGuard 来保护路由1。在 Laravel 中，您可以使用 auth 中间件来指定用于用户身份验证的“guard”2。不同的框架和平台可能有不同的实现方式，但它们的目的都是保护路由免受未经授权访问。


### in nestjs

在 NestJS 中，您可以创建一个带有 @Injectable() 装饰器的类来实现 Auth Guard。该类需要实现 CanActivate 接口，该接口具有一个 canActivate 方法，该方法在每次请求被装饰了 guard 的路由时调用。canActivate 方法接受一个 ExecutionContext 参数，并返回一个布尔值，指示是否可以访问该路由1。

例如，您可以创建一个名为 AuthGuard 的文件，并添加以下代码：

```ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // 在这里添加您的身份验证逻辑
    return true;
  }
}
```
然后，您可以使用 @UseGuards() 装饰器将 guard 应用于控制器或路由处理程序。例如：

```ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller()
export class AppController {
  @Get()
  @UseGuards(AuthGuard)
  getHello(): string {
    return 'Hello World!';
  }
}
```
您也可以使用 useGlobalGuards() 方法将 guard 应用于应用程序级别2。