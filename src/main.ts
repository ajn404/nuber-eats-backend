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
