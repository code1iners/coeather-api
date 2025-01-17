import { gql } from "apollo-server-core";

export default gql`
  # Current weather start.

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
    weather: [WeatherData]
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
    error: CoeatherSimpleError
    data: CurrentWeatherData
  }
  # Current weather end.

  # One call start.

  type OneCallCurrent {
    dt: Int
    sunrise: Int
    sunset: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    dew_point: Float
    uvi: Float
    clouds: Int
    visibility: Int
    wind_speed: Float
    wind_deg: Int
    weather: [OneCallCurrentWeather]
  }

  type OneCallCurrentWeather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type OneCallMinutely {
    dt: Int
    precipitation: Int
  }

  type OneCallMinutelyWeather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type OneCallHourly {
    dt: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    dew_point: Float
    uvi: Float
    clouds: Int
    visibility: Int
    wind_speed: Float
    wind_deg: Int
    wind_gust: Float
    weather: [OneCallMinutelyWeather]
    pop: Int
  }

  type OneCallDailyTemp {
    day: Float
    min: Float
    max: Float
    night: Float
    eve: Float
    morn: Float
  }

  type OneCallDaliyFeelsLike {
    day: Float
    night: Float
    eve: Float
    morn: Float
  }

  type OneCallDailyWeather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type OneCallDaily {
    dt: Int
    sunrise: Int
    sunset: Int
    moonrise: Int
    moonset: Int
    moon_phase: Float
    temp: OneCallDailyTemp
    feels_like: OneCallDaliyFeelsLike
    pressure: Int
    humidity: Int
    dew_point: Float
    wind_speed: Float
    wind_deg: Int
    wind_gust: Float
    weather: [OneCallDailyWeather]
    clouds: Int
    pop: Float
    uvi: Float
  }

  type OneCallData {
    lat: Float
    lon: Float
    timezone: String
    timezone_offset: Int
    current: OneCallCurrent
    minutely: [OneCallMinutely]
    hourly: [OneCallHourly]
    daily: [OneCallDaily]
  }

  type OneCallResponse {
    ok: Boolean!
    error: CoeatherSimpleError
    data: OneCallData
  }
  # One call end.
`;
