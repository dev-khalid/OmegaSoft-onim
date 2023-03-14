"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const addresses_repository_1 = require("./addresses.repository");
let AddressesService = class AddressesService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    create(createAddressDto) {
        return this.addressRepository.save(createAddressDto);
    }
    findAll() {
        return this.addressRepository.find();
    }
    async findOne(id) {
        return this.addressRepository.findOneBy({ id });
    }
    async update(id, updateAddressDto) {
        return this.addressRepository.update(id, updateAddressDto);
    }
    remove(id) {
        return this.addressRepository.delete(id);
    }
    async findAddressByName(name) {
        return this.addressRepository.getAddressByName(name);
    }
};
AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(addresses_repository_1.AddressRepository)),
    __metadata("design:paramtypes", [addresses_repository_1.AddressRepository])
], AddressesService);
exports.AddressesService = AddressesService;
//# sourceMappingURL=addresses.service.js.map