import { addReadingRequest, Reading } from '../../types';
import { MOCK_FERMENTATION_READING } from '../../mocks';

export const addReading = async (reading: addReadingRequest): Promise<Reading> => MOCK_FERMENTATION_READING;
