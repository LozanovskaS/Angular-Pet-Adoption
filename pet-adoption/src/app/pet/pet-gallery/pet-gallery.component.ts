import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pet-gallery',
  imports: [
    NgImageSliderModule
  ],
  templateUrl: './pet-gallery.component.html',
  styleUrl: './pet-gallery.component.css'
})
export class PetGalleryComponent implements OnInit {
  imageObject: any[] = [];  
  isLoading = true;  

  constructor(
    private petService: PetService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.imageObject = [];
    this.loadPetImages(1); 
  }

  private loadPetImages(petId: number): void {
    this.petService.getPetImages(petId).subscribe({
      next: (images) => {
        this.imageObject = images.map((image: any) => ({
          image: image.url,  
          thumbImage: image.url,
          title: image.description || ''
        }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading pet images:', err);
        this.isLoading = false;
      }
    });
  }
}
