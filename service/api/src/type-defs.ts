import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    fermentations: [Fermentation]
    createdAt: String!
    updatedAt: String!
  }

  type Fermentation {
    id: ID!
    name: String!
    active: Boolean!
    targetTemperature: Float!
    readings: [Reading]
    createdAt: String!
    updatedAt: String!
  }

  type Reading {
    id: ID!
    sensorName: String!
    value: Float!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    login(email: String!, password: String!): String
    addFermentation(name: String!, targetTemperature: Float!): Fermentation
    addReading(fermentationId: ID!, sensorName: String!, reading: Float!): Reading
  }

  type Query {
    myFermentations: [Fermentation]
  }
`;
