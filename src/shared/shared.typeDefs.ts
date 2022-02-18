import { gql } from "apollo-server-core";

export default gql`
  type CoeatherSimpleError {
    code: Int
    message: String
  }

  type Query {
    coeatherHello: String
  }
`;
