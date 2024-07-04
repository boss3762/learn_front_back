import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  sub_district: string;

  @Column()
  district: string;

  @Column()
  province: string;

  @Column()
  post_code: string;
}