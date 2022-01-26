import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * ### Getting default weather request api uri with query string.
 */
export const getRequestUri = (
  endpoints: string,
  args: {} | undefined | null = null
): string => {
  const queryString = new URLSearchParams({
    appid: String(process.env.OPEN_WEATHER_API_KEY),
    ...(args && { ...args }),
  });

  return `${endpoints}?${queryString.toString()}`;
};
