import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
});

export const weatherBaseUri = "/weather";

/**
 * ### Getting default weather request api uri with query string.
 */
export const getWeatherRequestUri = () => {
  const queryString = new URLSearchParams({
    appid: String(process.env.b68108c4e7035620a61f7a977d2b8df9),
  });

  return `/${weatherBaseUri}?${queryString.toString()}`;
};
