import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  private products: CreateProductDto[] = [];
  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto);
    return 'This action adds a new product';
  }

  createMany(createProductDtos: CreateProductDto) {
    let products = this.products.concat(createProductDtos);
    this.products = products;      
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.filter(p => p.id === id);
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const product = this.products.findIndex(p => p.id === id);
    if (product!== -1) {
      this.products[product] = {...this.products[product],...updateProductDto };
    } else {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return 'Product updated successfully';
  }

  remove(id: string) {
    const product = this.products.findIndex(p => p.id === id);
    if (product!== -1) {
      this.products.splice(product, 1);
    } else {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return 'Product removed successfully';
  }
}
