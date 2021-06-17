import { Reading, ReadingModel } from '../domain';
import { postgresClient } from './postgres-db';

const tableName = 'readings';

export const ReadingTable = {
  create: async (params: Partial<Reading>): Promise<void> => {
    const { sensorId, fermentationId, temperature } = params;
    await postgresClient.query<Reading>(
      `INSERT INTO ${tableName} ("sensorId", "fermentationId", "temperature", "createdAt", "updatedAt") VALUES ($1, $2, $3, now(), now())`,
      [sensorId, fermentationId, temperature],
    );
  },
  find: async (fermentationId: Reading['fermentationId']): Promise<ReadingModel[]> => {
    const result = await postgresClient.query<Reading>(`SELECT * FROM ${tableName} WHERE "fermentationId" = $1`, [
      fermentationId,
    ]);
    return result.rows.map((r) => new ReadingModel(r));
  },
};
