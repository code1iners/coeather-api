import { Resolvers } from "../../types/resolvers";
import { CurrentWeatherProps } from "../../types/weather.current";
import { getRequestUri } from "../../utils/axiosUtils";

const resolvers: Resolvers = {
  Query: {
    weatherCurrent: async (
      _,
      {
        cityName,
        cityId,
        latitude,
        longitude,
        zipCode,
        units = "metric",
        lang = "kr",
      }: CurrentWeatherProps,
      { axios }
    ) => {
      try {
        const uri = getRequestUri("weather", {
          ...(cityName && { q: cityName }),
          ...(cityId && { id: cityId }),
          ...(latitude && longitude && { lat: latitude, lon: longitude }),
          ...(zipCode && { zip: zipCode }),
          ...(units && { units }),
          ...(lang && { lang }),
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
