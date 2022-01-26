import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
});

export const weatherBaseUri = "/weather";

/**
 * ### Getting default weather request api uri with query string.
 */
export const getWeatherRequestUri = (
  args: {} | undefined | null = null
): string => {
  const queryString = new URLSearchParams({
    appid: String(process.env.OPEN_WEATHER_API_KEY),
    ...(args && { ...args }),
  });

  return `${weatherBaseUri}?${queryString.toString()}`;
};
