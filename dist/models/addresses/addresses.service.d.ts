import { AddressRepository } from './addresses.repository';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
export declare class AddressesService {
    private addressRepository;
    constructor(addressRepository: AddressRepository);
    create(createAddressDto: CreateAddressDto): Promise<CreateAddressDto & Address>;
    findAll(): Promise<Address[]>;
    findOne(id: number): Promise<Address>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findAddressByName(name: string): Promise<any>;
}
