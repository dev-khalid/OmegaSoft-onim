import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  //id: string
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }
  @Get("bycategory/:id")
  findByCategory(@Param("id") id: number) {
    return this.productsService.findByCategory(id);
  }
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }
  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
  //   return this.productsService.update(id, updateProductDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
