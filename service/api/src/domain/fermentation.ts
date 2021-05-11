import { Entity } from './entity';
import { Reading } from './reading';

export interface Fermentation {
  id: string;
  name: string;
  active: boolean;
  targetTemperature: number;
  readings: Reading[] | null;
  createdAt: string;
  updatedAt: string;
}

export class FermentationModel extends Entity<Fermentation> {}
