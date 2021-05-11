import { Reading } from './reading';

export type Fermentation = {
  id: string;
  name: string;
  active: boolean;
  targetTemperature: number;
  readings: Reading[] | null;
  createdAt: string;
  updatedAt: string;
};
