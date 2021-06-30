import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Fermentation {
    id: ID!
    userId: String!
    name: String!
    active: Boolean!
    targetTemperature: Float!
    readings: [Reading]
    createdAt: String!
    updatedAt: String!
  }

  type Reading {
    sensorId: String!
    temperature: Float!
    createdAt: String!
    updatedAt: String!
  }

  input ReadingInput {
    sensorId: String!
    temperature: Float!
  }

  type Mutation {
    login(email: String!, password: String!): String
    addFermentation(name: String!, targetTemperature: Float!): Boolean
    addReading(fermentationId: ID!, readings: [ReadingInput]!): Boolean
  }

  type Query {
    myFermentations: [Fermentation]
  }
`;
