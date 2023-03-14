"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDatabaseProviderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../../../config/database/mysql/config.module");
const config_service_1 = require("../../../config/database/mysql/config.service");
const product_entity_1 = require("../../../models/products/entities/product.entity");
const category_entity_1 = require("../../../models/category/entities/category.entity");
let MysqlDatabaseProviderModule = class MysqlDatabaseProviderModule {
};
MysqlDatabaseProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.MysqlConfigModule],
                useFactory: async (mysqlConfigService) => ({
                    type: "mysql",
                    host: "localhost",
                    port: "3306",
                    username: "root",
                    password: "khalid",
                    database: "restdb",
                    entities: [product_entity_1.Product, category_entity_1.Category],
                    synchronize: true,
                }),
                inject: [config_service_1.MysqlConfigService],
            }),
        ],
    })
], MysqlDatabaseProviderModule);
exports.MysqlDatabaseProviderModule = MysqlDatabaseProviderModule;
//# sourceMappingURL=provider.module.js.map