import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService, Theme } from './service/theme.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, NavbarComponent],
  providers: [ThemeService, HttpClientModule, ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  theme!: Observable<Theme>;

  constructor(private themeService: ThemeService, private api: ApiService) { }



  ngOnInit() {
    this.theme = this.themeService.node$;
    // this.api.getAllCountries().subscribe((data) => {
    //   console.log(data);
    // });
  }

  // toggleTheme() {
  //   this.themeService.toggleMode();
  // }
}
