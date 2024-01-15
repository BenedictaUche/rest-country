import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../types/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map((country) => country[0]));
  }

  getCountriesByCodes(codes: string[]) {
    return this.http.get<Country[]>(`${this.api}/alpha?codes=${codes.join(';')}`);
  }
}
