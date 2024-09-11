import { IsString, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsUrl, IsEnum } from 'class-validator';

export enum ProductCategory {
  ELECTRONICS = 'electronics',
  FASHION = 'fashion',
  HOME = 'home',
  BEAUTY = 'beauty',
  SPORTS = 'sports',
  TOYS = 'toys',
  GROCERY = 'grocery',
  BOOKS = 'books',
  OTHER = 'other',
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsEnum(ProductCategory)
  @IsNotEmpty()
  category: ProductCategory;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  stock: number;

  @IsUrl()
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsOptional()
  brand: string;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsEnum(ProductCategory)
  @IsOptional()
  category?: ProductCategory;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  brand?: string;
}