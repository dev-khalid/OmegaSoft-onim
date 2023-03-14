import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from '../category/category.module';

@Module({
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
  providers: [ProductsService]
})
export class ProductsModule {}
