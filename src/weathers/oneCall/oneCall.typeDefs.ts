import { gql } from "apollo-server-core";

export default gql`
    type Query {
        oneCall: (latitude: String!, longitude: String!, exclude: String): OneCallResponse!
    }
`;
