import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../types/api';
import { Observable, mergeMap, of, tap, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// interface NativeName {
//   [key: string]: { common: string };
// }

interface Currencies {
  [key: string]: any;
}

interface Languages {
  [key: string]: any;
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  country$: Observable<Country> = new Observable<Country>();
  borderCountries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      this.country$ = this.api.getCountryByName(params['country'])
      .pipe(tap((country) => console.log(country)),
        mergeMap((country) => {
          this.borderCountries$ = this.api.getCountriesByCodes(country.borders)
          console.log(country.borders);
          return of(country);

        })
      );
    });
  }

  displayNativeName(country: Country) {
    const nativeNameCode = Object.keys(country.name.nativeName)[0];
    return (country.name.nativeName as any)[nativeNameCode].common;
  }

  // displayCurrencies(currencies: Country['currencies']) {
  //   const currencyCode = Object.keys(currencies)[0];
  //   return (currencies as any)[currencyCode].AUD.name;
  // }



  displayCurrencies(currencies: Currencies) {
    if (currencies && Object.keys(currencies).length > 0) {
      const currencyCodes = Object.keys(currencies);
      // map each currency code to a string with name and symbol
      const currencyStrings = currencyCodes.map((currencyCode) => {
        const currency = currencies[currencyCode];
        return `${currency.name} (${currency.symbol})`;
      });

      return currencyStrings.join(', ');
    }
    return '';
  }

  displayLanguages(languages: Languages) {
    // Check if languages is defined and not empty
    if (languages && Object.keys(languages).length > 0) {
      const languageCodes = Object.keys(languages);

      // Map each language code to its corresponding name
      const languageNames = languageCodes.map(languageCode => languages[languageCode]);

      return languageNames.join(', ');
    }

    return ''; // Handle the case when languages is undefined or empty
  }


}
