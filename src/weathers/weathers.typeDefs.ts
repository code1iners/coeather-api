import { gql } from "apollo-server-core";

export default gql`
  type WeatherCoord {
    lon: Float
    lat: Float
  }

  type WeatherData {
    id: Int
    main: String
    description: String
    icon: String
  }

  type WeatherMain {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
  }

  type WeatherWind {
    speed: Float
    deg: Int
  }

  type WeatherClouds {
    all: Int
  }

  type WeatherSys {
    type: Int
    id: Int
    country: String
    sunrise: Int
    sunset: Int
  }

  type CurrentWeatherData {
    coord: WeatherCoord
    weather: WeatherData
    base: String
    main: WeatherMain
    visibility: Int
    wind: WeatherWind
    clouds: WeatherClouds
    dt: Int
    sys: WeatherSys
    timezone: Int
    id: Int
    name: String
    cod: Int
  }

  type CurrentWeatherResponse {
    ok: Boolean!
    error: SimpleError
    data: CurrentWeatherData
  }
`;
