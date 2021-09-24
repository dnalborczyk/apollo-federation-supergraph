import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-lambda";
import { print } from "graphql";
import supergraphAst from "./supergraph.json";

const gateway = new ApolloGateway({
  supergraphSdl: print(supergraphAst),
});

const server = new ApolloServer({
  gateway,
});

export default server.createHandler();
