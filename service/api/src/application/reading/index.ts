import { addReadingRequest } from '../../types';
import { ReadingTable } from '../../persistence/index';
import { logger } from '../../logger';

export const addReading = async (params: addReadingRequest): Promise<boolean> => {
  try {
    await ReadingTable.create(params);
    return true;
  } catch (err) {
    logger.warn(err);
    return false;
  }
};
