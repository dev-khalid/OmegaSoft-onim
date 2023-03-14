import { Category } from "../../category/entities/category.entity";
export declare class Product {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    categoryId: number;
    category: Category;
}
