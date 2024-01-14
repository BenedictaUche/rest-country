import { Component, Input } from '@angular/core';
import { Country } from '../../types/api';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [NgIf, CommonModule, RouterModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  @Input()
  country: Country;

  constructor() {
    this.country = {} as Country;
  }
}
