import { Resolvers } from "../../types/resolvers";
import { IAirPollutionProps } from "../../types/weathers";
import { getRequestUri } from "../../utils/axiosUtils";
import { ERROR_MESSAGE_FAILED_GETTING_WEATHER_KR } from "../../utils/constants";

const resolvers: Resolvers = {
  Query: {
    getAirPollution: async (
      _,
      { latitude, longitude, start, end }: IAirPollutionProps,
      { axios }
    ) => {
      try {
        const uri = getRequestUri({
          endpoint: "air_pollution/forecast",
          queries: {
            lat: latitude,
            lon: longitude,
            ...(start && { start }),
            ...(end && { end }),
          },
        });

        const { status, statusText, data } = await axios.get(uri);
        // Have a problem?
        if (status !== 200) {
          console.error("[getForecastWeather]", statusText);
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
        return {
          ok: false,
          error: {
            code: 500,
            message: ERROR_MESSAGE_FAILED_GETTING_WEATHER_KR,
          },
        };
      }
    },
  },
};

export default resolvers;
