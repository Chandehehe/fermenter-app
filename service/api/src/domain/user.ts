import { Entity } from './entity';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class UserModel extends Entity<User> {}
