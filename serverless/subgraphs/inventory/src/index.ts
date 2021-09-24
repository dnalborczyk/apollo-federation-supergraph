import { buildSubgraphSchema } from '@apollo/federation'
import { ApolloServer } from 'apollo-server-lambda'
import schemaAst from './inventory.json'
import type { Resolvers } from './inventory'

const delivery = [
  {
    id: 'apollo-federation',
    estimatedDelivery: '6/25/2021',
    fastestDelivery: '6/24/2021',
  },
  {
    id: 'apollo-studio',
    estimatedDelivery: '6/25/2021',
    fastestDelivery: '6/24/2021',
  },
]

const resolvers: Resolvers = {
  Product: {
    delivery(product) {
      return delivery.find((p) => p.id == product.id)
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
