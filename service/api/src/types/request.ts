export type loginRequest = {
  email: string;
  password: string;
};

export type addFermentationRequest = {
  userId: string;
  name: string;
  targetTemperature: number;
};

export type getFermentationsRequest = {
  userId: string;
};

export type updateFermentationRequest = {
  userId: string;
  fermentationId: string;
  name?: string;
  targetTemperature?: number;
};

export type addReadingRequest = {
  userId: string;
  fermentationId: string;
  readings: Array<{
    sensorId: string;
    temperature: number;
  }>;
};
