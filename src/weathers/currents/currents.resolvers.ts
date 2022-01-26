import { Resolvers } from "../../types/resolvers";
import { getWeatherRequestUri } from "../../utils/axiosUtils";

const resolvers: Resolvers = {
  Query: {
    weatherCurrent: async (_, { cityName, cityId }, { axios }) => {
      try {
        const uri = getWeatherRequestUri({
          ...(cityName && { q: cityName }),
          ...(cityId && { id: cityId }),
        });

        const { status, statusText, data } = await axios.get(`${uri}`);
        // Request failed?
        if (status !== 200) {
          return {
            ok: false,
            error: {
              code: status,
              message: statusText,
            },
          };
        }

        return {
          ok: true,
          data,
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
