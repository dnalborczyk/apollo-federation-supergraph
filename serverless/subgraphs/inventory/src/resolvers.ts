import type { Resolvers } from 'schema-inventory'

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

export default resolvers
