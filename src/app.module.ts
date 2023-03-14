import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { AppConfigModule } from '@/config/app/config.module';
import { AppConfigService } from '@/config/app/config.service';
import { MysqlDatabaseProviderModule } from '@/providers/database/mysql/provider.module';
import { ProductsModule } from './models/products/products.module';
import { CategoryModule } from './models/category/category.module';

@Module({
  imports: [AppConfigModule, MysqlDatabaseProviderModule, ProductsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule {}
