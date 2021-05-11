import { ApolloServer, AuthenticationError } from 'apollo-server-lambda';

import { resolvers } from './resolvers';
import { typeDefs } from './type-defs';
import { getUserFromToken } from './application/auth';

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ event }) => {
    const token = event.headers.Authorization || '';
    const user = getUserFromToken(token);
    // if (!user) throw new AuthenticationError('you must be logged in');
    return { user };
  },
  playground: {
    endpoint: '/dev/graphql',
  },
});

export const graphqlHandler = apolloServer.createHandler({
  cors: { credentials: true, origin: '*' },
});
