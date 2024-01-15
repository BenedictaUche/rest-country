import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), RouterModule, provideHttpClient(withFetch()), provideStore(), provideEffects(), provideRouterStore()]
};
