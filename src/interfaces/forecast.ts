export interface IForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrent;
  hourly: ICurrent[];
  daily: IDay[];
}

export interface ICurrent {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeather[];
  pop?: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IDay {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: ITemp;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeather[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface IFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface ITemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
