import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';

@Entity('addresses') 
export class AddressEntity {
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

  @Column({name: "user_id"})
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.addresses)
  @JoinColumn({ name: "user_id"})
  user: UserEntity;
}