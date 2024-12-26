import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { AdoptionApplication } from '../models/adoption-application';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = environment.apiUrl + "/pet";
  private adoptionUrl = environment.apiUrl + "/AdoptionApp";
  private imageUrl = environment.apiUrl + "/image;"

  constructor(private http: HttpClient) { }

  // Existing pet methods
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${id}`);
  }

  deletePetById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updatePet(petId: number, pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.apiUrl}/${pet.id}`, pet);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.apiUrl}`, pet);
  }

  getPetImages(petId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?petId=${petId}`);
  }

  deletePetImages(imageId: number): Observable<void> {
    return this.http.delete<void>(`${this.imageUrl}/${imageId}`);
  }

  getAdoptionApplications(): Observable<AdoptionApplication[]> {
    return this.http.get<AdoptionApplication[]>(`${this.adoptionUrl}`);
  }

  getAdoptionApplicationById(id: number): Observable<AdoptionApplication> {
    return this.http.get<AdoptionApplication>(`${this.adoptionUrl}/${id}`);
  }

  createAdoptionApplication(application: Partial<AdoptionApplication>): Observable<AdoptionApplication> {
    return this.http.post<AdoptionApplication>(`${this.adoptionUrl}`, application);
  }

  updateAdoptionApplication(id: number, application: Partial<AdoptionApplication>): Observable<AdoptionApplication> {
    return this.http.put<AdoptionApplication>(`${this.adoptionUrl}/${id}`, application);
  }

  getPetAdoptionApplications(petId: number): Observable<AdoptionApplication[]> {
    return this.http.get<AdoptionApplication[]>(`${this.adoptionUrl}/pet/${petId}`);
  }

  updateApplicationStatus(id: number, status: string): Observable<AdoptionApplication> {
    return this.http.put<AdoptionApplication>(`${this.adoptionUrl}/${id}`, { status });
  }
}