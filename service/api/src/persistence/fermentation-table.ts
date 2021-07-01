import { Fermentation, FermentationModel } from '../domain';
import { postgresClient } from './postgres-db';

const tableName = 'fermentations';

export const FermentationTable = {
  create: async (userId: Fermentation['userId'], params: Partial<Fermentation>): Promise<void> => {
    const { name, active, targetTemperature } = params;
    await postgresClient.query<Fermentation>(
      `INSERT INTO ${tableName} ("userId", name, active, "targetTemperature", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, now(), now())`,
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

  update: async (params: Partial<Fermentation>): Promise<FermentationModel[]> => {
    const { id, name, targetTemperature } = params;
    const result = await postgresClient.query<Fermentation>(
      `UPDATE ${tableName} SET "name" = $1, "targetTemperature" = $2 WHERE id = $3`,
      [name, targetTemperature, id],
    );
    return result.rows.map((r) => new FermentationModel(r));
  },
};
