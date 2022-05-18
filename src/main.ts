import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes();
  const options = new DocumentBuilder()
    .setTitle('Service API')
    .setDescription('API for Service Test App APi ')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        description: 'Default Jwt Authorization',
        type: 'http',
        in: 'Header',
        scheme: 'bearer',
        bearerFormat: 'Bearer',
        name: 'Authorization',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document);
  const configService = app.get(ConfigService);
  const poart = configService.get('PORT');
  await app.listen(poart);
}
bootstrap();

/*
.addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Jwt',
        name: 'authorization',
      },
      'access-token',
    )
*/
