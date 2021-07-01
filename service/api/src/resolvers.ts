import { doLogin, addFermentation, updateFermentation, getFermentations, addReading } from './application';
import { Fermentation } from './domain';
import { loginRequest, addFermentationRequest, addReadingRequest, Context, updateFermentationRequest } from './types';

export const resolvers = {
  Mutation: {
    async login(parent: unknown, { email, password }: loginRequest): Promise<string | null> {
      return await doLogin(email, password);
    },
    async addFermentation(parent: unknown, params: addFermentationRequest, context: Context): Promise<boolean | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await addFermentation({ ...params, userId });
    },
    async updateFermentation(
      parent: unknown,
      params: updateFermentationRequest,
      context: Context,
    ): Promise<boolean | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await updateFermentation({ ...params, userId });
    },
    async addReading(parent: unknown, params: addReadingRequest, context: Context): Promise<boolean | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await addReading({ ...params, userId });
    },
  },
  Query: {
    async myFermentations(parent: unknown, params: unknown, context: Context): Promise<Fermentation[] | null> {
      if (!context.user) return null;
      const userId = context.user.subject;
      return await getFermentations({ userId });
    },
  },
};
