import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorController {
    private readonly vendorService;
    constructor(vendorService: VendorService);
    create(createVendorDto: CreateVendorDto): Promise<CreateVendorDto & import("./entities/vendor.entity").Vendor>;
    findAll(): Promise<import("./entities/vendor.entity").Vendor[]>;
    findOne(id: string): Promise<import("./entities/vendor.entity").Vendor>;
    update(id: string, updateVendorDto: UpdateVendorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): any;
}
