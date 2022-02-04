import { Resolvers } from "../../types/resolvers";
import { ICurrentWeatherProps } from "../../types/weathers";
import { getRequestUri } from "../../utils/axiosUtils";
import { ERROR_MESSAGE_FAILED_GETTING_WEATHER_BY_CITY_NAME_KR } from "../../utils/constants";

const resolvers: Resolvers = {
  Query: {
    getCurrentWeather: async (
      _,
      {
        cityName,
        cityId,
        latitude,
        longitude,
        zipCode,
        units = "metric",
        lang = "kr",
      }: ICurrentWeatherProps,
      { axios }
    ) => {
      try {
        const uri = getRequestUri({
          endpoint: "weather",
          queries: {
            ...(cityName && { q: cityName }),
            ...(cityId && { id: cityId }),
            ...(latitude && longitude && { lat: latitude, lon: longitude }),
            ...(zipCode && { zip: zipCode }),
            units,
            lang,
          },
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
            message: ERROR_MESSAGE_FAILED_GETTING_WEATHER_BY_CITY_NAME_KR,
          },
        };
      }
    },
  },
};

export default resolvers;
