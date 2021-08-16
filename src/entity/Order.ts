import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { OrderItem } from "./OrderItem";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  totalPrice: number;

  @Column({ type: 'integer' })
  status: number;

  @OneToMany(type => OrderItem, item => item.order)
  orderItems: OrderItem[];

  @ManyToOne(type => User, user => user.orders)
  user: User;
}