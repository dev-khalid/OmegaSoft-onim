import { DataSource, Repository } from "typeorm";
import { Address } from "./entities/address.entity";
export declare class AddressRepository extends Repository<Address> {
    private dataSource;
    constructor(dataSource: DataSource);
    getAddressByName(name: string): Promise<any>;
}
