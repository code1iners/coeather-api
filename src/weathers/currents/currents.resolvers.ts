import { Resolvers } from "../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    getCurrentByCityName: (_, { cityName }, { axios }) => {
      try {
        return {
          ok: false,
          error: {
            code: 500,
            message: "Net implement yet.",
          },
        };
      } catch (e) {
        console.error("[getCurrentByCityName]", e);
        return {
          ok: false,
          error: {
            code: 500,
            message: "Failed getting current weather by city name.",
          },
        };
      }
    },
  },
};

export default resolvers;
