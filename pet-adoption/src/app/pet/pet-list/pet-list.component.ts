import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})

export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  filteredPets: Pet[] = [];
  isLoading = true;

  constructor(
    private petService: PetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPets();
  }

  private loadPets(): void {
    this.isLoading = true;
    this.petService.getPets().subscribe({
      next: (data) => {
        this.pets = data;
        this.filteredPets = data;
        this.isLoading = false;
        console.log('Pets loaded:', this.pets);
      },
      error: (error) => {
        console.error('Error loading pets:', error);
        this.isLoading = false;
      }
    });
  }

  viewPetDetails(petId: number): void {
    this.router.navigate(['/pet', petId]);
  }

  applyFilter(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPets = this.pets.filter(pet => 
      pet.name.toLowerCase().includes(searchTerm) ||
      pet.species.toLowerCase().includes(searchTerm) ||
      pet.breed.toLowerCase().includes(searchTerm)
    );
  }
}