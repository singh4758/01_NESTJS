import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
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
