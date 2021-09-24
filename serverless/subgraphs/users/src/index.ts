import { buildSubgraphSchema } from '@apollo/federation'
import { ApolloServer } from 'apollo-server-lambda'
import schemaAst from './users.json'
import type { Resolvers } from './users'

const users = [
  {
    email: 'support@apollographql.com',
    name: 'Apollo Studio Support',
    totalProductsCreated: 4,
  },
]

const resolvers: Resolvers = {
  User: {
    __resolveReference(reference) {
      return users.find((u) => u.email == reference.email)
    },
  },
}

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    resolvers,
    typeDefs: schemaAst,
  }),
})

export default server.createHandler()
