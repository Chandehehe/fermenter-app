import { User, Fermentation, Reading, ReadingModel } from '../domain';
import { influxDBClient } from './influx-db';

export const ReadingTable = {
  create: async (
    userId: User['id'],
    fermentationId: Fermentation['id'],
    temperature: Reading['temperature'],
    sensorName: Reading['sensorName'],
  ): Promise<void> => {
    console.log({
      measurement: 'readings',
      fields: { temperature },
      tags: { userId, fermentationId, sensorName },
    });
    await influxDBClient.writePoints([
      {
        measurement: 'readings',
        fields: { temperature },
        tags: { userId, fermentationId, sensorName },
      },
    ]);
  },
  find: async (fermentationId: Fermentation['id']): Promise<ReadingModel[]> => {
    const result = await influxDBClient.query<Reading>(
      `select * from readings where fermentationId='${fermentationId}' order by time desc`,
    );
    return result.map((r) => new ReadingModel(r));
  },
};
