import { Resolvers } from "../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    CoeatherHello: () => "world",
  },
};

export default resolvers;
