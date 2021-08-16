import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Order } from "./Order";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer' })
    age: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    email: string;

    @OneToMany(type => Order, order => order.user)
    orders: Order[];
}
