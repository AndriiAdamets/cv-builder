import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

import { User as UserInterface } from '@cv-maker/api-interfaces';

@Table
export class User extends Model<User> implements UserInterface {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
