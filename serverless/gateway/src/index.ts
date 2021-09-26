import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server-lambda'
import { print } from 'graphql'
import schemaAst from 'schema-gateway'

const gateway = new ApolloGateway({
  supergraphSdl: print(schemaAst),
})

const server = new ApolloServer({
  gateway,
})

export default server.createHandler()
