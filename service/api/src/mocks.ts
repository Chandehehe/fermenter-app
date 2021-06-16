export const MOCK_DATE = new Date().toISOString();

export const MOCK_FERMENTATION_READING = {
  id: '5dbd7498-3e7e-448d-9c6f-6cb59a7c50f8',
  createdAt: MOCK_DATE,
  updatedAt: MOCK_DATE,
  sensorName: 'ambient',
  temperature: 20,
};

export const MOCK_FERMENTATION = {
  id: '5dbd7498-3e7e-448d-9c6f-6cb59a7c50f8',
  createdAt: MOCK_DATE,
  updatedAt: MOCK_DATE,
  name: 'Pale Ale',
  active: true,
  targetTemperature: 10.5,
  readings: [
    { ...MOCK_FERMENTATION_READING, sensorName: 'ambient', value: 21.1 },
    { ...MOCK_FERMENTATION_READING, sensorName: 'fermenter', value: 22.2 },
  ],
};

export const MOCK_USER = {
  id: '90d11416-d26a-44a7-bdf6-2135e19a87b5',
  createdAt: MOCK_DATE,
  updatedAt: MOCK_DATE,
  email: 'head@brewer.com',
  password: 'pAsSWoRd!',
  name: 'Head Brewer',
  fermentations: [
    {
      ...MOCK_FERMENTATION,
      readings: [
        { ...MOCK_FERMENTATION_READING, sensorName: 'ambient' },
        { ...MOCK_FERMENTATION_READING, sensorName: 'fermenter' },
      ],
    },
  ],
};
