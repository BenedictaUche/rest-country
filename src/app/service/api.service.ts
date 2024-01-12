import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1/all'
  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}`);
  }
}
