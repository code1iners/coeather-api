import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
});

interface IRequestUriParameters {
  endpoint: string;
  queries: {} | undefined | null;
}

/**
 * ### Getting default weather request api uri with query string.
 */
export const getRequestUri = (params: IRequestUriParameters): string => {
  const queryString = new URLSearchParams({
    appid: String(process.env.OPEN_WEATHER_API_KEY),
    ...(params.queries && { ...params.queries }),
  });

  return `${params.endpoint}?${queryString.toString()}`;
};
