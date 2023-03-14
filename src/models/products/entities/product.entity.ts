import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Category } from "../../category/entities/category.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  description: string;

  // @Column()
  // category: string;

  @Column()
  image: string;
  //category: any; 
  // @Column()
  // categoriesId: Number;
  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
