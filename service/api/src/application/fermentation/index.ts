import { addFermentationRequest, Fermentation } from '../../types';
import { MOCK_FERMENTATION } from '../../mocks';

export const addFermentation = async (fermentation: addFermentationRequest): Promise<Fermentation> => MOCK_FERMENTATION;
export const getFermentations = async (): Promise<Fermentation[]> => [MOCK_FERMENTATION];
