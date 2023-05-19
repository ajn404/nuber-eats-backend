```shell
nest g mo jwt
```

申明forRoot方法返回dynamicModule
jst.module.ts
```ts
import { DynamicModule, Module } from '@nestjs/common';
@Module({})
export class JwtModule {
    static forRoot(): DynamicModule {
        return {
            module: JwtModule,
        }
    }
}
```


```shell
nest g s jwt
```