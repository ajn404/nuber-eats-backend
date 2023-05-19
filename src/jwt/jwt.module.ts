import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModuleOptions } from './jwt.constances';
import { JWT_MODULE_OPTIONS } from './jwt.instances';

@Module({})
@Global()
export class JwtModule {
    static forRoot(options: JwtModuleOptions): DynamicModule {
        return {
            module: JwtModule,
            exports: [JwtService],
            providers: [
                {
                    provide: JWT_MODULE_OPTIONS,
                    useValue: options,
                },
                JwtService
                //上述等同于下面的写法
                // {
                //     provide: JwtService,
                //     useClass: JwtService,
                // }
            ],
        }
    }
}
