import { ICommonWeather } from "./types";

export interface IForecastProps extends ICommonWeather {
  latitude: number;
  longitude: number;
  exclude: "current" | "minutely" | "hourly" | "daily" | "alerts";
}
