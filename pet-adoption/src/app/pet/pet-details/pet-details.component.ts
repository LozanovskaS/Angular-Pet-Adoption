import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../pet.service'; 
import { Pet } from '../../models/pet';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit {
  pet?: Pet;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute, 
    private petService: PetService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const id = +params['id'];
      this.loadPetDetails(id);
    })
  }

  private loadPetDetails(id: number){
    this.petService.getPetById(id).subscribe(
      pet => this.pet = pet
    );
  }
}


