import { addReadingRequest } from '../../types';
import { ReadingTable } from '../../persistence/index';
import { logger } from '../../logger';

export const addReading = async (params: addReadingRequest): Promise<boolean> => {
  try {
    const { userId, fermentationId, sensorName, temperature } = params;
    await ReadingTable.create(userId, fermentationId, temperature, sensorName);
    return true;
  } catch (err) {
    logger.warn(err);
    return false;
  }
};
