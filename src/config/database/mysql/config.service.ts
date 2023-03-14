import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MysqlConfigService {
    constructor(private configService: ConfigService) {}
    get host(): string {
        const hostname = this.configService.get<string>('mysql.host');
        console.log('hostname', hostname);
        return hostname;
    }
    get port(): number {
        return Number(this.configService.get<number>('mysql.port'));
    }
    get database(): string {
        const db = this.configService.get<string>('mysql.database');
        console.log('db', db);
        return db;
    }  
    get username(): string {
        return this.configService.get<string>('mysql.username');
    }
    get password(): string {
        return this.configService.get<string>('mysql.password');
    }
    
}