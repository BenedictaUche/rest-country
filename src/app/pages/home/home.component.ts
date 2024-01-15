import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Country } from '../../types/api';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from "../../components/dropdown/dropdown.component";

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, CountryCardComponent, FormsModule, DropdownComponent]
})

export class HomeComponent implements OnInit {
  searchFilter: string = '';
  source: Country[] = [];
  regionOptions = REGION_OPTIONS;
  regionFilter: string = '';
  // countries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  // search filter function
  get countries(): Country[] {
    return this.source ?
    this.source.filter((country) =>
    this.searchFilter ? country.name.common.toLowerCase().includes(this.searchFilter.toLowerCase()): country)
    .filter((country) => this.regionFilter ? country.region.includes(this.regionFilter): country)
    : this.source;
  }
}
