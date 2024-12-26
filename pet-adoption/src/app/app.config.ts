import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { HomeModule } from './home/home.module';
import { PetModule } from './pet/pet.module';
import { AdoptionApplicationComponent } from './adoption-application/adoption-application.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    HomeModule,
    PetModule,
    AdoptionApplicationComponent
  ]
};