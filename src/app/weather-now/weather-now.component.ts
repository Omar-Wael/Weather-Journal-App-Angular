import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClimateService } from '../climate.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.css'],
})
export class WeatherNowComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter();
  weatherData: any;
  location: string = '';
  today = new Date();
  constructor(private climateService: ClimateService) {}

  ngOnInit(): void {}
  getweather(location: string): void {
    this.climateService
      .getWeather(location)
      .subscribe((data) => (this.weatherData = data));
    let description = this.weatherData?.current.weather_descriptions;
    this.getWeatherDescription(description);
    console.log(this.weatherData);
  }
  getWeatherDescription(description: string): void {
    this.eventEmitter.emit(description);
    console.log(description);
  }
}
