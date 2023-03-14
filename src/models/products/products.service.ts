import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { Category } from "../category/entities/category.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.productsRepository.save(createProductDto);
    // const categoryRepository = getRepository(Category);
    // const product = new Product();
    // product.title = createProductDto.title;
    // product.price = createProductDto.price;
    // product.description = createProductDto.description;
    // product.image = createProductDto.image;
    // product.categoryId = createProductDto.categoryId; 
    // const savedProduct = await this.productsRepository.save(product);

    // // savedProduct.categoryId = createProductDto.categoryId;

    // return savedProduct;
  }

  findAll() {
    return this.productsRepository.find({ relations: ["category"] });
  }

  findOne(id: number) {
    return this.productsRepository.findOne({
      relations: ["category"],
    });
  }
  findByCategory(id: number) { 
    return this.productsRepository.findBy({
      categoryId: id
    })
  }
  // findOne(id: number) {
  //   return this.productsRepository.findOneBy({id},{
  //      relations: ['category'],
  //   });
  // }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(id, updateProductDto);
    // return this.productsRepository.findOne(id);
  }

  remove(id: number): any {
    return this.productsRepository.delete(id);
  }
}
