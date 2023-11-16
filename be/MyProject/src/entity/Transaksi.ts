import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transaksi' })
export class Transaksi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoice_number: string;

  @Column()
  invoice_date: string;
  
  @Column()
  customer: string;

  @Column()
  qty: number;

  @Column()
  total_amount: number;

  @Column()
  total_count: number;
  
  @Column()
  product_detail: string;





}