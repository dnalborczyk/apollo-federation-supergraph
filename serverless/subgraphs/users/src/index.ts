import { buildSubgraphSchema } from '@apollo/federation'
import { ApolloServer } from 'apollo-server-lambda'
import resolvers from './resolvers'
import schemaAst from './users.json'

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    resolvers,
    typeDefs: schemaAst,
  }),
})

export default server.createHandler()
