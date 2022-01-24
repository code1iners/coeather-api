import { AxiosInstance } from "axios";

interface Context {
  axios: AxiosInstance;
}

export type Resolver = (
  parent: any,
  args: any,
  context: Context,
  info: any
) => any;

export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver;
  };
}
