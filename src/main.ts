import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { JwtMiddleware } from './jwt/jwt.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //   app.use(new JwtMiddleware().use);
  await app.listen(3000);
}
bootstrap();
