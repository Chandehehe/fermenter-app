import { doLogin, addFermentation, getFermentations, addReading } from './application';
import { loginRequest, addFermentationRequest, addReadingRequest, Reading, Fermentation } from './types';

export const resolvers = {
  Mutation: {
    async login(parent: null, { email, password }: loginRequest): Promise<string | null> {
      return await doLogin(email, password);
    },
    async addFermentation(parent: null, request: addFermentationRequest): Promise<Fermentation> {
      return await addFermentation(request);
    },
    async addReading(parent: null, request: addReadingRequest): Promise<Reading> {
      return await addReading(request);
    },
  },
  Query: {
    myFermentations: (): Promise<Fermentation[]> => getFermentations(),
  },
};
