import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../pet.service';
import { Pet } from '../../models/pet';
import { AdoptionApplication } from '../../models/adoption-application'; // Import model
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { EditPetDialogComponent } from '../edit-pet-dialog/edit-pet-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PetGalleryComponent } from '../pet-gallery/pet-gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    PetGalleryComponent,
    NgImageSliderModule
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css',
})
export class PetDetailsComponent implements OnInit {
  pet!: Pet;
  adoptionApplications: AdoptionApplication[] = []; 
  currentImageIndex = 0;
  petListComponent: any;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadPetDetails(id);
    });
  }

  private loadPetDetails(id: number): void {
    this.petService.getPetById(id).subscribe((pet) => {
      this.pet = pet;
      this.loadAdoptionApplications(); 
    });
  }

  private loadAdoptionApplications(): void {
    if (this.pet) {
      this.petService.getAdoptionApplications().subscribe({
        next: (applications) => {
          this.adoptionApplications = applications.filter(
            (app) => app.pet?.id === this.pet?.id
          );
        },
        error: (err) => {
          console.error('Error loading adoption applications:', err);
        },
      });
    }
  }

  onEditPet(): void {
    if (this.pet) {
      const dialogRef = this.dialog.open(EditPetDialogComponent, {
        width: '400px',
        data: { pet: this.pet },
      });

      dialogRef.afterClosed().subscribe((updatedPet: Pet | undefined) => {
        if (updatedPet) {
          this.petService.updatePet((this.pet as Pet).id, updatedPet).subscribe({
            next: (response) => {
              this.pet = response;
              console.log('Pet updated successfully', response);
            },
            error: (err) => {
              console.error('Error updating pet:', err);
            },
          });
        }
      });
    }
  }


  onDeletePet(): void {
    if (this.pet) {
      if (this.pet.id !== undefined && this.pet.id !== null) {
        const confirm = window.confirm(`Are you sure you want to delete ${this.pet.name}? This will also delete its images.`);
  
        if (confirm) {
          if (this.pet.images && this.pet.images.length > 0) {
            const imageDeletions = this.pet.images.map((image) => {
              const imageId = image.id;
              console.log(`Deleting image with ID: ${imageId}`);
              return this.petService.deletePetImages(imageId);
            });
  
  
            forkJoin(imageDeletions).subscribe({
              next: () => {
                console.log('All images deleted successfully.');
                this.deletePet(); 
              },
              error: (err) => {
                console.error('Error deleting images:', err);
                alert('An error occurred while deleting the images.');
              },
            });
          } else {
            this.deletePet();
          }
        }
      } else {
        console.error('Pet id is not valid');
      }
    } else {
      console.error('Pet is not defined');
    }
  }
  
  private deletePet(): void {
    this.petService.deletePetById(this.pet.id).subscribe({
      next: () => {
        alert(`${this.pet.name} has been deleted along with its images.`);
        window.history.back();
      },
      error: (err) => {
        console.error('Error deleting pet:', err);
        alert('An error occurred while deleting the pet.');
      },
    });
  }
  
  
  private refreshPetList(): void {
    this.petService.getPets().subscribe({
      next: (updatedPets) => {
        this.petListComponent.pets = updatedPets;
      },
      error: (err) => {
        console.error('Error refreshing pets list:', err);
      },
    });
  }

  getMainImage(): string {
    const fallbackImage = 'placeholder-image-url';

    if (!this.pet) {
      return fallbackImage;
    }

    if (this.pet.images && this.pet.images.length > 0) {
      return this.pet.images[0].url;
    }

    return fallbackImage;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'badge badge-warning';
      case 'Approved':
        return 'badge badge-success';
      case 'Rejected':
        return 'badge badge-danger';
      default:
        return 'badge badge-secondary';
    }
  }
  
}
