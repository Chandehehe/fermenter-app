export type loginRequest = {
  email: string;
  password: string;
};

export type addFermentationRequest = {
  name: string;
  targetTemperature: number;
};

export type addReadingRequest = {
  fermentationId: string;
  sensorName: string;
  reading: number;
};
