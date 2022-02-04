import { Resolvers } from "../../../types/resolvers";
import { ICity, ICityListByCityNameProps } from "../../../types/weathers";
import { ERROR_MESSAGE_FAILED_GETTING_COUNTRY_LIST_KR } from "../../../utils/constants";
import { getCities } from "../../../utils/fileUtils";

const resolvers: Resolvers = {
  Query: {
    getCountries: async () => {
      try {
        const cities = await getCities();

        // Convert city as i want type.
        const convertedCities = cities.map(({ name, country }: ICity) => {
          return {
            name,
            country,
          };
        });

        // Extract only country.
        const countries = convertedCities
          .map(({ country }) => country)
          .filter((country) => Boolean(country));

        // Remove duplicate.
        const removeDuplicatesCountries = new Set(countries);

        // Sort data.
        const data = Array.from(removeDuplicatesCountries).sort();

        return {
          ok: true,
          data,
        };
      } catch (e) {
        console.error("[getCountries]", e);
        return {
          ok: false,
          error: {
            code: 500,
            message: ERROR_MESSAGE_FAILED_GETTING_COUNTRY_LIST_KR,
          },
        };
      }
    },

    findCountriesByName: async (_, { cityName }: ICityListByCityNameProps) => {
      try {
        const cities = await getCities();

        const filteredCities = cities.filter((city) =>
          city.name.toLowerCase().includes(cityName.toLowerCase())
        );

        return {
          ok: true,
          data: filteredCities,
        };
      } catch (e) {
        console.error("[getCountriesByName]", e);
        return {
          ok: false,
          error: {
            code: 500,
            message: ERROR_MESSAGE_FAILED_GETTING_COUNTRY_LIST_KR,
          },
        };
      }
    },
  },
};

export default resolvers;
