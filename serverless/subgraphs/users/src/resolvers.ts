import type { Resolvers } from 'schema-users'

const users = [
  {
    email: 'support@apollographql.com',
    name: 'Apollo Studio Support',
    totalProductsCreated: 4,
  },
]

const resolvers: Resolvers = {
  Query: {
    getUser(_, args) {
      return users.find(({ email }) => email === args.email)!
    },
  },

  User: {
    __resolveReference(user) {
      return users.find(({ email }) => email === user.email)!
    },
  },
}

export default resolvers
