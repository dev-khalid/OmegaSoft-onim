import { ConfigService } from '@nestjs/config';
export declare class MysqlConfigService {
    private configService;
    constructor(configService: ConfigService);
    get host(): string;
    get port(): number;
    get database(): string;
    get username(): string;
    get password(): string;
}
