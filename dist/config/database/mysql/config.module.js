"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlConfigModule = void 0;
const Joi = require("@hapi/joi");
const common_1 = require("@nestjs/common");
const configuration_1 = require("./configuration");
const config_service_1 = require("./config.service");
const config_1 = require("@nestjs/config");
let MysqlConfigModule = class MysqlConfigModule {
};
MysqlConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                validationSchema: Joi.object({
                    MYSQL_HOST: Joi.string().default('localhost'),
                    MYSQL_PORT: Joi.number().default(3306),
                    MYSQL_USER: Joi.string().default('root'),
                    MYSQL_PASSWORD: Joi.string().default(''),
                    MYSQL_DATABASE: Joi.string()
                        .valid('restdb', 'microfin_v3_bds', 'microfin_v3_fda', 'microfin_v3_nabolok')
                        .default('restdb'),
                }),
            }),
        ],
        providers: [config_1.ConfigService, config_service_1.MysqlConfigService],
        exports: [config_1.ConfigService, config_service_1.MysqlConfigService],
    })
], MysqlConfigModule);
exports.MysqlConfigModule = MysqlConfigModule;
//# sourceMappingURL=config.module.js.map