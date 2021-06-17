import { Entity } from './entity';

export type Reading = {
  sensorId: string;
  fermentationId: string;
  temperature: number;
  createdAt: string;
  updatedAt: string;
};

export class ReadingModel extends Entity<Reading> {}
