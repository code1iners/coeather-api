import { DEVELOPMENT, PRODUCTION } from "./constants";

/**
 * ### Initialize environment configuration file path.
 */
export function initEnvironment() {
  require("dotenv").config({ path: getCurrentEnvironment() });
}

/**
 * ### Getting current environment file path.
 * @returns Environment file path as String.
 */
export function getCurrentEnvironment() {
  switch (process.env.NODE_ENV) {
    case DEVELOPMENT:
      return `${__dirname}/../../.env.${DEVELOPMENT}`;
    case PRODUCTION:
      return `${__dirname}/../../.env.${PRODUCTION}`;
    default:
      return `${__dirname}/../../.env.${DEVELOPMENT}`;
  }
}
