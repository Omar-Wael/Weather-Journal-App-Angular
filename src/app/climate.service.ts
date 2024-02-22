import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherDetails } from './models/weather';
@Injectable({
  providedIn: 'root',
})
export class ClimateService {
  weatherDetails: weatherDetails[] = [];
  constructor(private http: HttpClient) {}
  getWeather(location: string) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=c9fd819ae6e1e7ab7586a67bf8880de7&query=' +
        location +
        '&units=m'
    );
  }
}
