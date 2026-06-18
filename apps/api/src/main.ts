import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(
    AppModule
  );

  const config = SwaggerModule.createDocument(
    app,
    {
      openapi: '3.0.0',
      info: {
        title: 'BeautyOS API',
        version: '1.0.0'
      }
    } as any
  );

  SwaggerModule.setup(
    'docs',
    app,
    config
  );

  await app.listen(3000);
}

bootstrap();
