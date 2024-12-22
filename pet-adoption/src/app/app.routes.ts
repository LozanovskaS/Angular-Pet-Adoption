import { Routes } from '@angular/router';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },      
    {path: 'pets', component: PetListComponent},
    {path: 'pet/:id', component: PetDetailsComponent}
];
