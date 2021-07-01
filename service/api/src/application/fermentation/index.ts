import { addFermentationRequest, getFermentationsRequest, updateFermentationRequest } from '../../types';
import { Fermentation, FermentationModel } from '../../domain';
import { ReadingTable, FermentationTable } from '../../persistence/index';
import { logger } from '../../logger';

export const addFermentation = async (params: addFermentationRequest): Promise<boolean> => {
  const newFermentation = {
    active: true,
    ...params,
  };

  try {
    await FermentationTable.create(params.userId, newFermentation);
    return true;
  } catch (err) {
    logger.warn(err);
    return false;
  }
};

export const updateFermentation = async (params: updateFermentationRequest): Promise<boolean> => {
  try {
    const { fermentationId, name, targetTemperature } = params;
    const fermentation = await FermentationTable.findOne(fermentationId);

    if (name) {
      fermentation.set('name', name);
    }

    if (targetTemperature) {
      fermentation.set('targetTemperature', targetTemperature);
    }

    const fermentationToUpdate = fermentation.getAttributes();
    await FermentationTable.update(fermentationToUpdate as Fermentation);

    return true;
  } catch (err) {
    logger.warn(err);
    return false;
  }
};

export const getFermentations = async (params: getFermentationsRequest): Promise<Fermentation[]> => {
  const { userId } = params;
  const rawFermentations = await FermentationTable.findByUserId(userId);
  const fermentations = [];
  for (const fermentation of rawFermentations) {
    const readings = await ReadingTable.find(fermentation.get('id'));
    fermentations.push({ ...fermentation.getAttributes(), readings: readings.map((r) => r.getAttributes()) });
  }
  return fermentations.map((f) => new FermentationModel(f).asJsonResponse());
};
