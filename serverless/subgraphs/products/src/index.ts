import { buildSubgraphSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server-lambda";
import schemaAst from "./products.json";

const products = [
  {
    id: "apollo-federation",
    package: "@apollo/federation",
    sku: "federation",
    variation: "OSS",
  },
  {
    id: "apollo-studio",
    package: "",
    sku: "studio",
    variation: "platform",
  },
];

const resolvers = {
  Query: {
    allProducts: (_, args, context) => {
      return products;
    },

    product: (_, args, context) => {
      return products.find((p) => p.id == args.id);
    },
  },

  Product: {
    variation(reference) {
      if (reference.variation) {
        return {
          id: reference.variation,
        };
      }

      return {
        id: products.find((p) => p.id == reference.id).variation,
      };
    },

    dimensions() {
      return {
        size: "1",
        weight: 1,
      };
    },

    createdBy(reference) {
      return {
        email: "support@apollographql.com",
        totalProductsCreated: 1337,
      };
    },

    __resolveReference: (reference) => {
      if (reference.id) {
        return products.find((p) => p.id == reference.id);
      }

      if (reference.sku && reference.package) {
        return products.find(
          (p) => p.sku == reference.sku && p.package == reference.package
        );
      }

      return {
        id: "rover",
        package: "@apollo/rover",
        ...reference,
      };
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    resolvers,
    typeDefs: schemaAst,
  }),
});

export default server.createHandler();
