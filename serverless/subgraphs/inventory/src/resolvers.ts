import type { Resolvers } from 'schema-inventory'

const delivery = [
  {
    estimatedDelivery: '6/25/2021',
    fastestDelivery: '6/24/2021',
    id: 'apollo-federation',
  },
  {
    estimatedDelivery: '6/25/2021',
    fastestDelivery: '6/24/2021',
    id: 'apollo-studio',
  },
]

const resolvers: Resolvers = {
  Product: {
    delivery(product) {
      return delivery.find(({ id }) => id === product.id)!
    },
  },
}

export default resolvers
