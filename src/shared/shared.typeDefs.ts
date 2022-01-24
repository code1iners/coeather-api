import { gql } from "apollo-server-core";

export default gql`
  type SimpleError {
    code: Int
    message: String
  }

  type SimpleResponse {
    ok: Boolean!
    error: SimpleError
  }

  type Query {
    hello: String
  }
`;
