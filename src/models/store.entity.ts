import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('store')
export default class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  categoryId: number;

  @Column()
  createdAt: Date;
}
