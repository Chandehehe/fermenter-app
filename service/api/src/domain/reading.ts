import { Entity } from './entity';

export interface Reading {
  id: string;
  sensorName: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}

export class ReadingModel extends Entity<Reading> {}
