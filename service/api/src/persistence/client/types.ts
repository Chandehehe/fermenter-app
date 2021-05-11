export interface Client<T> {
  find(item: T): Promise<T[]>;
  findOne(item: T): Promise<T>;
  insert(item: T): Promise<T>;
}
