import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderItem } from "./OrderItem";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
  
  @Column({ type: 'integer' })
  price: number;
  
  @Column({ type: 'integer' })
  remainCount: number;

  @OneToMany(type => OrderItem, orderItem => orderItem.product)
  orderItems: OrderItem[];
}