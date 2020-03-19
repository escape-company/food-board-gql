import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  storeId: number;

  @Column()
  createdAt: Date;
}
