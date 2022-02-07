import { gql } from "apollo-server-core";

export default gql`
  type CountriesResponse {
    ok: Boolean!
    error: CoeatherSimpleError
    data: [String]
  }

  type FureCountriesData {
    id: Int
    name: String
    state: String
    country: String
    coord: CountriesCoord
  }

  type CountriesCoord {
    lat: Float
    lon: Float
  }

  type FureCountriesResponse {
    ok: Boolean!
    error: CoeatherSimpleError
    data: [FureCountriesData]
  }

  type Query {
    getCountries: CountriesResponse!

    findCountriesByName(cityName: String): FureCountriesResponse!
  }
`;
