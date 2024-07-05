import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AddressEntity } from 'src/address/models/address.entity';

@Entity('users') 
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses: AddressEntity;
}