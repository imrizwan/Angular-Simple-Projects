import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {

  }

  getWeather(location) {
    return this.http.get(
      'http://api.apixu.com/v1/current.json?key=6254073924a145f4b68165543190909&q=' + location
    );
  }
}
