import { User, UserModel } from '../domain';
import { postgresClient } from './postgres-db';

const tableName = 'users';

export const UserTable = {
  find: async (): Promise<UserModel[]> => {
    const result = await postgresClient.query<User>(`SELECT * FROM ${tableName}`);
    return result.rows.map((r) => new UserModel(r));
  },
  findOne: async (email: User['email']): Promise<UserModel> => {
    const result = await postgresClient.query<User>(`SELECT * FROM ${tableName} WHERE email = $1`, [email]);
    const { rows } = result;
    return new UserModel(rows[0]);
  },
};
