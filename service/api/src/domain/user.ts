import { Entity } from './entity';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserModel extends Entity<User> {}
