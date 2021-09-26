import type { Resolvers } from 'schema-users'

const users = [
  {
    email: 'support@apollographql.com',
    name: 'Apollo Studio Support',
    totalProductsCreated: 4,
  },
]

const resolvers: Resolvers = {
  User: {
    __resolveReference(user) {
      return users.find((u) => u.email === user.email)
    },
  },
}

export default resolvers
