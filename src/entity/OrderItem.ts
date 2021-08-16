import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  count: number;

  @ManyToOne(type => Product, product => product.orderItems)
  product: Product;

  @ManyToOne(type => Order, order => order.orderItems)
  order: Order;
}