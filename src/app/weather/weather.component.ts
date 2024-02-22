import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherDescription: string = '';
  constructor() {}

  ngOnInit(): void {}
  getWeatherDescription(description: string) {
    this.weatherDescription = description;
  }
}
