import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Country, Currencies, Languages } from '../../types/api';
import { Observable, mergeMap, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  country$: Observable<Country> = new Observable<Country>();
  borderCountries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const countryName = params['country'];


        this.country$ = this.api.getCountryByName(countryName).pipe(
          tap(
            (country) => console.log(country)
            ),
            mergeMap((country) => {
              this.borderCountries$ = this.api.getCountriesByCodes([country.cca2]);
              return of(country)
            }),
        );
    });
  }

  displayNativeName(country: Country) {
    return country.name.nativeName;
  }

  displayCurrencies(currencies: Currencies[]) {
    return currencies.map((currency) => currency).join(', ');
}

displayLanguages(languages: Languages[]) {
    return languages.map((language) => language).join(', ');
}

}
