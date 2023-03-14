import { Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';
export declare class VendorService {
    private vendorRepository;
    constructor(vendorRepository: Repository<Vendor>);
    create(createVendorDto: CreateVendorDto): Promise<CreateVendorDto & Vendor>;
    findAll(): Promise<Vendor[]>;
    findOne(id: number): Promise<Vendor>;
    update(id: number, updateVendorDto: UpdateVendorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): any;
}
