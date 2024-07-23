import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personal_information')
export class PersonalInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
