import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService  {
  //categoryRepository: any;
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryDto) {
    
    return this.categoryRepository.save(createCategoryDto);
  }
  
  findAll() {
    const result= this.categoryRepository.find();
    console.log(result) ;
   return result; }

  findOne(id: number) {
    return this.categoryRepository.findOne({
      relations: ['products'],
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
    //return this.categoryRepository.findOne(id);
  }

  remove(id: number):any {
    return this.categoryRepository.delete(id);
  }
  
}
