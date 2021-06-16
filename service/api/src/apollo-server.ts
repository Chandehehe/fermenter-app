import { ApolloServer } from 'apollo-server-lambda';

import { resolvers } from './resolvers';
import { typeDefs } from './type-defs';
import { getUserFromToken } from './application/auth';

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ event }) => {
    const token = event.headers.Authorization || null;
    let user = null;
    if (token) {
      user = getUserFromToken(token);
    }
    return { user };
  },
  playground: {
    endpoint: '/dev/graphql',
  },
});

export const graphqlHandler = apolloServer.createHandler({
  cors: { credentials: true, origin: '*' },
});
