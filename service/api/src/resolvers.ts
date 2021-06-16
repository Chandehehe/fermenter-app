import { doLogin, addFermentation, getFermentations, addReading } from './application';
import { Fermentation } from './domain';
import { loginRequest, addFermentationRequest, addReadingRequest } from './types';

export const resolvers = {
  Mutation: {
    async login(parent: unknown, { email, password }: loginRequest): Promise<string | null> {
      return await doLogin(email, password);
    },
    async addFermentation(parent: unknown, params: addFermentationRequest, context: any): Promise<boolean | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await addFermentation({ ...params, userId });
    },
    async addReading(parent: unknown, params: addReadingRequest, context: any): Promise<boolean | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await addReading({ ...params, userId });
    },
  },
  Query: {
    async myFermentations(parent: unknown, params: unknown, context: any): Promise<Fermentation[] | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await getFermentations({ userId });
    },
  },
};
