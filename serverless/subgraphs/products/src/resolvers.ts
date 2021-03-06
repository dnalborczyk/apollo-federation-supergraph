import type { Resolvers } from 'schema-products'

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
    allProducts() {
      return products
    },

    product(_, args) {
      return products.find(({ id }) => id === args.id)!
    },
  },

  Product: {
    createdBy() {
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

    variation(product) {
      if (product.variation) {
        return product.variation
      }

      return products.find(({ id }) => id === product.id)!.variation
    },

    __resolveReference(product) {
      if ('id' in product) {
        return products.find(({ id }) => id === product.id)!
      }

      if ('package' in product && 'sku' in product) {
        return products.find(
          ({ package: pkg, sku }) => pkg === product.package && sku === sku,
        )!
      }

      return {
        id: 'rover',
        package: '@apollo/rover',
        sku: product.sku ?? null,
        variation: product.variation,
      }
    },
  },
}

export default resolvers
