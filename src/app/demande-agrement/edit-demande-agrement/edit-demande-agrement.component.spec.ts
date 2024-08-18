import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemandeAgrementComponent } from './edit-demande-agrement.component';

describe('EditDemandeAgrementComponent', () => {
  let component: EditDemandeAgrementComponent;
  let fixture: ComponentFixture<EditDemandeAgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDemandeAgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDemandeAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
