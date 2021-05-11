import { getFermentations, addFermentation } from './index';
import { MOCK_FERMENTATION } from '../../mocks';

describe('getFermentations', () => {
  it('should return fermentation list', async () => {
    const result = await getFermentations();
    expect(result).toEqual([MOCK_FERMENTATION]);
  });
});

describe('addFermentation', () => {
  it('should return fermentation', async () => {
    const result = await addFermentation({ name: 'sample', targetTemperature: 1 });
    expect(result).toEqual(MOCK_FERMENTATION);
  });
});
