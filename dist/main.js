"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./config/app/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.enableCors();
    const appConfig = app.get(config_service_1.AppConfigService);
    console.log(`App running on port ${appConfig.port}`);
    await app.listen(appConfig.port);
}
bootstrap();
//# sourceMappingURL=main.js.map