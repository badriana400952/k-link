import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laporan-transaksi' })
export class LaporanTransaksi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bnsperiod: string;

  @Column()
  invoice_number: string;
  
  @Column()
  invoice_date: string;

  @Column()
  customer: string;

  @Column()
  prdnm: string;

  @Column()
  qty: number;

  @Column()
  harga: number;
  





}