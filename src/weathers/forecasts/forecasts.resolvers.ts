import { Resolvers } from "../../types/resolvers";
import { IForecastProps } from "../../types/weather.forecast";
import { getRequestUri } from "../../utils/axiosUtils";
import { ERROR_MESSAGE_FAILED_GETTING_WEATHER_KR } from "../../utils/constants";

const resolvers: Resolvers = {
  Query: {
    getForecastWeather: async (
      _,
      {
        latitude,
        longitude,
        exclude,
        units = "metric",
        lang = "kr",
      }: IForecastProps,
      { axios }
    ) => {
      try {
        const uri = getRequestUri({
          endpoint: "onecall",
          queries: {
            ...(latitude && { lat: latitude }),
            ...(longitude && { lon: longitude }),
            ...(exclude && { exclude: exclude }),
            units,
            lang,
          },
        });

        const { status, statusText, data } = await axios.get(uri);
        // Have a problem?
        if (status !== 200) {
          console.error("[oneCall]", statusText);
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
        console.error("[oneCall]", e);
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
