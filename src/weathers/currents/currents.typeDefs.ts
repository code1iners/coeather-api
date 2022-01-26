import { gql } from "apollo-server-core";

export default gql`
  type Query {
    weatherCurrent(
      cityName: String
      cityId: String
      latitude: String
      longitude: String
      zipCode: String
      units: String
      lang: String
    ): CurrentWeatherResponse!
  }
`;
