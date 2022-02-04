import { Resolvers } from "../../../types/resolvers";
import { readFileSync } from "fs";
import {
  ICityListByCountryCodeProps,
  ICity,
  ICityListByCityNameProps,
} from "../../../types/weathers";
import { ERROR_MESSAGE_FAILED_GETTING_CITY_LIST_KR } from "../../../utils/constants";
import { getCities } from "../../../utils/fileUtils";

const resolvers: Resolvers = {
  Query: {
    getCitiesByCountryCode: async (
      _,
      { country }: ICityListByCountryCodeProps
    ) => {
      try {
        const cities = await getCities();
        const isValidArray = Array.isArray(cities);

        if (!isValidArray)
          throw new Error(ERROR_MESSAGE_FAILED_GETTING_CITY_LIST_KR);

        // Parse by country.
        const data = cities.filter(
          (city) => city.country.toUpperCase() === country.toUpperCase()
        );

        return {
          ok: true,
          data,
        };
      } catch (e) {
        console.error("[getCityListByCountryCode]", e);

        return {
          ok: false,
          error: {
            code: 500,
            message: ERROR_MESSAGE_FAILED_GETTING_CITY_LIST_KR,
          },
        };
      }
    },

    findCitiesByCityName: async (_, { cityName }: ICityListByCityNameProps) => {
      try {
        const cities = await getCities();
        if (!Array.isArray(cities))
          throw new Error(ERROR_MESSAGE_FAILED_GETTING_CITY_LIST_KR);

        // Filtering cities.
        const filteredCities = cities.filter(({ name }) =>
          name.toLowerCase().includes(cityName.toLowerCase())
        );

        return {
          ok: true,
          data: filteredCities,
        };
      } catch (e) {
        console.error("[findCitiesByCityName]", e);
        return {
          ok: false,
          error: {
            code: 500,
            message: ERROR_MESSAGE_FAILED_GETTING_CITY_LIST_KR,
          },
        };
      }
    },
  },
};

export default resolvers;
