import { ICommonWeather } from "./types";

export interface ICurrentWeatherProps extends ICommonWeather {
  cityName?: string;
  cityId?: string;
  latitude?: string;
  longitude?: string;
  zipCode?: string;
}

export interface IForecastProps extends ICommonWeather {
  latitude: number;
  longitude: number;
  exclude: "current" | "minutely" | "hourly" | "daily" | "alerts";
}

export interface IAirPollutionProps {
  latitude: number;
  longitude: number;
  start: number;
  end: number;
}

export interface ICity {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface ICityListByCountryCodeProps {
  country: string;
}

export interface ICityListByCityNameProps {
  cityName: string;
}
