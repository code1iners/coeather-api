import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getForecastWeather(
      latitude: Float!
      longitude: Float!
      exclude: String
      units: String
      lang: String
    ): OneCallResponse!
  }
`;
