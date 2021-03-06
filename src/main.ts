import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';
import { AllExceptionsFilter } from './exceptions-filters/all-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const loggerService = app.get<LoggerService>(LoggerService);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  app.use(helmet());
  app.useGlobalFilters(new AllExceptionsFilter(loggerService, configService));

  if (configService.get<string>('environment') == 'development') {
    const options = new DocumentBuilder()
      .setTitle('Music Publisher API')
      .setDescription('music-publisher microservice')
      .setVersion('0.0.1')
      .addTag('publisher')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(configService.get<string>('port'));
}
bootstrap();
