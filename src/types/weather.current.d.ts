import { ICommonWeather } from "./types";

export interface ICurrentWeatherProps extends ICommonWeather {
  cityName?: string;
  cityId?: string;
  latitude?: string;
  longitude?: string;
  zipCode?: string;
}
