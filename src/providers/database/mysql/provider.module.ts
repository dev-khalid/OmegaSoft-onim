import { DatabaseType } from "typeorm";
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { MysqlConfigModule } from "@/config/database/mysql/config.module";
import { MysqlConfigService } from "@/config/database/mysql/config.service";
// import { User } from '@/models/users/entities/user.entity';
// import { Address } from '@/models/addresses/entities/address.entity';
// import { Vendor } from '@/models/vendors/entities/vendor.entity';
import { Product } from "@/models/products/entities/product.entity";
import { Category } from "@/models/category/entities/category.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      useFactory: async (mysqlConfigService: MysqlConfigService) => ({
        type: "mysql" as DatabaseType,
        // host: mysqlConfigService.host,
        // port: mysqlConfigService.port,
        // username: mysqlConfigService.username,
        // password: mysqlConfigService.password,
        // database: mysqlConfigService.database,
        host: "localhost",
        port: "3306",
        username: "root",
        password: "khalid",
        database: "restdb",
        entities: [Product, Category],
        synchronize: true,
      }),
      inject: [MysqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
}) 
export class MysqlDatabaseProviderModule {}
