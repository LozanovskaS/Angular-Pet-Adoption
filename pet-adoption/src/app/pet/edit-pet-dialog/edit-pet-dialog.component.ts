import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Pet } from '../../models/pet';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { MatButtonModule } from '@angular/material/button'; // For mat-button
import { MatInputModule } from '@angular/material/input'; // For matInput
import { MatFormFieldModule } from '@angular/material/form-field'; // For mat-form-field
import { PetService } from '../pet.service';

@Component({
  selector: 'app-edit-pet-dialog',
  templateUrl: './edit-pet-dialog.component.html',
  standalone: true,
  imports: [ FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
    ],
})
export class EditPetDialogComponent implements OnInit { 
  constructor(
    public dialogRef: MatDialogRef<EditPetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pet: Pet },
    private petService: PetService
  ) {}

  ngOnInit() {
  
    this.dialogRef.afterClosed().subscribe(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  }

  onSave(): void {
  
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    this.editPet(this.data.pet.id, this.data.pet);
    this.dialogRef.close(this.data.pet);
  }

  onCancel(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    this.dialogRef.close();
  }

  editPet(petId: number, updatedPetData: Pet): void {
    this.petService.updatePet(petId, updatedPetData).subscribe({
      next: (response) => {
        console.log('Pet updated successfully!', response);
      },
      error: (err) => {
        console.error('Error updating pet:', err);
      }
    });
  }
}
