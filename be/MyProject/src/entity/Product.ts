// Product.entity.ts
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prdnm: string;

  @Column()
  harga: number;

  @ManyToOne(() => User, user => user.products)
  @JoinColumn({ name: 'userId' })
  user: User;


}