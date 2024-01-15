import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as VisitedCountriesActions from '../store/actions/visited-countries.actions';


@Injectable({
  providedIn: 'root'
})
export class VisitedCountriesService {

  constructor(private store: Store<AppState>) { }


  // add a country to the visited countries list
  addToVisitedCountries(country: string): void {
    this.store.dispatch(VisitedCountriesActions.addCountry({ country }));
  }

  // get the list of visited countries
  getVisitedCountries(): string[] {
    let visitedCountries: string[] = [];
    this.store.select(state => state.visitedCountries).subscribe(
      countries => visitedCountries = countries
    );
    return visitedCountries;
  }
}
