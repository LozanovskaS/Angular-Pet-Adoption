import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-pet-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './create-pet-dialog.component.html'
})
export class CreatePetDialogComponent {
  petForm: FormGroup;
  imageUrl: string | null = null;

  constructor(
    private dialogRef: MatDialogRef<CreatePetDialogComponent>,
    private fb: FormBuilder
  ) {
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      breed: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      description: [''],
      status: ['available', Validators.required],
      imageUrl: [''],
      images: []
    });
  }


  onImageUrlChange(): void {
    const urlValue = this.petForm.get('imageUrl')?.value;
    this.imageUrl = urlValue || null;
    console.log('Image URL changed:', this.imageUrl);
  }

  handleImageError(event: any): void {
    console.error('Image failed to load:', this.imageUrl);
    this.imageUrl = null;
    
    this.petForm.patchValue({ imageUrl: '' });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.petForm.valid) {
      const formValue = this.petForm.value;
      const petData = {
        name: formValue.name,
        species: formValue.species,
        breed: formValue.breed,
        age: formValue.age,
        gender: formValue.gender,
        description: formValue.description,
        status: formValue.status,
        images: formValue.imageUrl ? [{ url: formValue.imageUrl.trim() }] : []
      };
  
      console.log('Saving pet data:', petData);
      this.dialogRef.close(petData);
    }
  }
  
}

