import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetDialogComponent } from './create-pet-dialog.component';

describe('CreatePetDialogComponent', () => {
  let component: CreatePetDialogComponent;
  let fixture: ComponentFixture<CreatePetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePetDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
