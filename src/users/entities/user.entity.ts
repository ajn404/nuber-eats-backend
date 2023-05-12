import { CoreEntities } from 'src/common/entities/core.entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends CoreEntities {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
