export interface weatherDetails {
  request: object;
  location: object;
  current: object;
}

export class request {
  'type': string;
  'query': string;
  'language': string;
  'unit': string;
  constructor() {
    this.type = '';
    this.query = '';
    this.language = '';
    this.unit = '';
  }
}

export class location {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
  constructor() {
    this.name = '';
    this.country = '';
    this.region = '';
    this.lat = '';
    this.lon = '';
    this.timezone_id = '';
    this.localtime = '';
    this.localtime_epoch = 0;
    this.utc_offset = '';
  }
}

export class current {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
  constructor() {
    this.observation_time = '';
    this.temperature = 0;
    this.weather_code = 0;
    this.weather_icons = [];
    this.weather_descriptions = [];
    this.wind_speed = 0;
    this.wind_degree = 0;
    this.wind_dir = '';
    this.pressure = 0;
    this.precip = 0;
    this.humidity = 0;
    this.cloudcover = 0;
    this.feelslike = 0;
    this.uv_index = 0;
    this.visibility = 0;
    this.is_day = '';
  }
}
