import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet/pet.service';
import { AdoptionApplication } from '../models/adoption-application';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-adoption-applications',
  standalone: true,
    imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatTabsModule,
      MatFormFieldModule,
      MatSelectModule
    ],
  templateUrl: './adoption-application.component.html',
  styleUrls: ['./adoption-application.component.css'],
})
export class AdoptionApplicationComponent implements OnInit {
  adoptionApplications: AdoptionApplication[] = []; 
  isLoading = true;
  errorMessage: string | null = null;

  statusOptions: string[] = ['Pending', 'Adopted', 'Available'];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.loadAdoptionApplications();
  }

  private loadAdoptionApplications(): void {
    this.isLoading = true;
    this.petService.getAdoptionApplications().subscribe({
      next: (applications) => {
        console.log('Applications:', applications); // Debug log
        this.adoptionApplications = applications;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading applications:', err); // Debug log
        this.errorMessage = 'Failed to load adoption applications.';
        this.isLoading = false;
      },
    });
  }
  
  getPetImage(application: AdoptionApplication): string {
    return application.pet?.images?.[0]?.url || 'assets/placeholder-pet.jpg';
  }

  getApplicantName(application: AdoptionApplication): string {
    const { firstName = 'Unknown', lastName = 'User' } = application.user || {};
    return `${firstName} ${lastName}`;
  }

  onStatusChange(application: any, newStatus: string): void {
    application.status = newStatus; // Update the application status locally
    console.log('Status changed:', application);
  
    // Send the updated status to the backend
    this.petService.updateApplicationStatus(application.id, newStatus).subscribe({
      next: () => console.log('Status updated successfully'),
      error: (err) => console.error('Failed to update status:', err)
    });
  }
}
