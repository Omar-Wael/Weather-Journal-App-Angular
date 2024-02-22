import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { ClimateService } from './climate.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherNowComponent,
    WeatherForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ClimateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
