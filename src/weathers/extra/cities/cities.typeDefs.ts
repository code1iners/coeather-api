import { gql } from "apollo-server-core";

export default gql`
  type CityData {
    id: Int
    name: String
    state: String
    country: String
    coord: CityCoord
  }

  type CityCoord {
    lat: Float
    lon: Float
  }

  type CitiesReponse {
    ok: Boolean!
    error: CoeatherSimpleError
    data: [CityData]
  }

  type Query {
    getCitiesByCountryCode(country: String!): CitiesReponse!

    findCitiesByCityName(cityName: String!): CitiesReponse!
  }
`;
