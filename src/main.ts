import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { AppConfigService } from '@/config/app/config.service';

// const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  const appConfig: AppConfigService = app.get(AppConfigService);
  //ContextIdFactory.apply(new AggregateByProviderContextIdStrategy());
  console.log(`App running on port ${appConfig.port}`);
  await app.listen(appConfig.port);
}
bootstrap();
