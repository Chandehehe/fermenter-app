import { IRead, BaseRepositoryOptions } from './types';

export abstract class BaseRepository<T> implements IRead<T> {
  private readonly _client;

  constructor(options: BaseRepositoryOptions<T>) {
    this._client = options.client;
  }

  async find(item: T): Promise<T[]> {
    const data = await this._client.find(item);
    return data;
  }

  async findOne(item: T): Promise<T> {
    const data = await this._client.findOne(item);
    return data;
  }
}
