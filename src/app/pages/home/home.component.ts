import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable } from 'rxjs';
import { Country } from '../../types/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  countries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getAllCountries();
  }
}
