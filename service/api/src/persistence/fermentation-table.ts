import { Fermentation, FermentationModel } from '../domain';
import { postgresClient } from './postgres-db';

const tableName = 'fermentations';

export const FermentationTable = {
  create: async (userId: Fermentation['userId'], params: Partial<Fermentation>): Promise<void> => {
    const { name, active, targetTemperature } = params;
    await postgresClient.query<Fermentation>(
      `INSERT INTO ${tableName} ("userId", name, active, "targetTemperature", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, snow(), now())`,
      [userId, name, active, targetTemperature],
    );
  },

  find: async (): Promise<FermentationModel[]> => {
    const result = await postgresClient.query<Fermentation>(`SELECT * FROM ${tableName}`);
    return result.rows.map((r) => new FermentationModel(r));
  },

  findOne: async (id: Fermentation['id']): Promise<FermentationModel> => {
    const result = await postgresClient.query<Fermentation>(`SELECT * FROM ${tableName} WHERE id = $1`, [id]);
    const { rows } = result;
    return new FermentationModel(rows[0]);
  },

  findByUserId: async (userId: Fermentation['userId']): Promise<FermentationModel[]> => {
    const result = await postgresClient.query<Fermentation>(`SELECT * FROM ${tableName} WHERE "userId" = $1`, [userId]);
    return result.rows.map((r) => new FermentationModel(r));
  },
};
