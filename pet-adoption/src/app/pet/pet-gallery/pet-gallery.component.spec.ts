import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetGalleryComponent } from './pet-gallery.component';

describe('PetGalleryComponent', () => {
  let component: PetGalleryComponent;
  let fixture: ComponentFixture<PetGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
