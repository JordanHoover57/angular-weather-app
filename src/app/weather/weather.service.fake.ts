import {Observable, of } from "rxjs";
import { WeatherService } from "./weather.service";
import {ICurrentWeather } from "../interfaces";

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intesisty drizzle'
}

export class WeatherServiceFake extends WeatherService {
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather);
  }
}
