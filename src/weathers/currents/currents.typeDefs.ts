import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getCurrentByCityName(cityName: String!): CurrentWeatherResponse!
  }
`;
