import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude() //  it will exclude password in response
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('insert with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('update with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('remove with id', this.id);
  }
}
