import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService, Theme } from './service/theme.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;

  constructor(private themeService: ThemeService) {
  this.theme = new Observable<Theme>();
}


  ngOnInit() {
    this.theme = this.themeService.node$;
  }

  // toggleTheme() {
  //   this.themeService.toggleMode();
  // }
}
