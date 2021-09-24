import { buildSubgraphSchema } from '@apollo/federation'
import { ApolloServer } from 'apollo-server-lambda'
import schemaAst from './products.json'
import type { Resolvers } from './products'

const products = [
  {
    id: 'apollo-federation',
    package: '@apollo/federation',
    sku: 'federation',
    variation: {
      id: 'OSS',
    },
  },
  {
    id: 'apollo-studio',
    package: '',
    sku: 'studio',
    variation: {
      id: 'platform',
    },
  },
]

const resolvers: Resolvers = {
  Query: {
    allProducts(_, args, context) {
      return products
    },

    product(_, args, context) {
      return products.find((p) => p.id == args.id)
    },
  },

  Product: {
    createdBy(reference) {
      return {
        email: 'support@apollographql.com',
        totalProductsCreated: 1337,
      }
    },

    dimensions() {
      return {
        size: '1',
        weight: 1,
      }
    },

    variation(reference) {
      if (reference.variation) {
        return reference.variation
      }

      return products.find((p) => p.id == reference.id).variation
    },

    __resolveReference(reference) {
      if ('id' in reference) {
        return products.find((p) => p.id == reference.id)
      }

      if ('package' in reference && reference.sku) {
        return products.find(
          (p) => p.sku == reference.sku && p.package == reference.package,
        )
      }

      return {
        id: 'rover',
        package: '@apollo/rover',
        ...reference,
      }
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
