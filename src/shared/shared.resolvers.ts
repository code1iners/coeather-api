import { Resolvers } from "../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    coeatherHello: () => "world",
  },
};

export default resolvers;
