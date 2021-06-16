import { Entity } from './entity';

export type Reading = {
  sensorName: string;
  temperature: number;
};

export class ReadingModel extends Entity<Reading> {}
