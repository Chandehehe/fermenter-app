import { addReadingRequest } from '../../types';
import { ReadingTable } from '../../persistence/index';
import { logger } from '../../logger';

export const addReading = async (params: addReadingRequest): Promise<boolean> => {
  try {
    const { userId, fermentationId } = params;
    for (const reading of params.readings) {
      const { sensorId, temperature } = reading;
      const readingToCreate = { userId, fermentationId, sensorId, temperature };
      await ReadingTable.create(readingToCreate);
    }

    return true;
  } catch (err) {
    logger.warn(err);
    return false;
  }
};
