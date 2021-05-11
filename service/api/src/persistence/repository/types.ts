import { Client } from '../client';

export interface IRead<T> {
  find(item: T): Promise<T[]>;
  findOne(item: T): Promise<T>;
}

export interface BaseRepositoryOptions<T> {
  tableName: string;
  client: Client<T>;
}
