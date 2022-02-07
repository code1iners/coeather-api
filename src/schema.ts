import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typeDefsPath = `${__dirname}/**/*.typeDefs.ts`;
const loadedTypeDefs = loadFilesSync(typeDefsPath);
export const typeDefs = mergeTypeDefs(loadedTypeDefs);

const resolversPath = `${__dirname}/**/*.resolvers.ts`;
const loadedResolvers = loadFilesSync(resolversPath);
export const resolvers = mergeResolvers(loadedResolvers) as any;
