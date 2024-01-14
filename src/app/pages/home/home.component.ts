import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable } from 'rxjs';
import { Country } from '../../types/api';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  countries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getAllCountries();

    this.countries$.subscribe((data) => {
      console.log(data);
    });
  }
}
