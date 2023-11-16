import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  handphone: string;

  @Column()
  email: string;

  @Column()
  password: string;



  @OneToMany(() => Product, product => product.user)
  products: Product[];
}