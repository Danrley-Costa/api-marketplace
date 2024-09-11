import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Product } from '../entities/product.entity'

export type ProductDocument = HydratedDocument<Products>

@Schema({collection:'products',})
export class Products implements Product {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  preco: number;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  brand: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
