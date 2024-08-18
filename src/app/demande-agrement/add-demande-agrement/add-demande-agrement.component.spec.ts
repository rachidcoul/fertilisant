import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeAgrementComponent } from './add-demande-agrement.component';

describe('AddDemandeAgrementComponent', () => {
  let component: AddDemandeAgrementComponent;
  let fixture: ComponentFixture<AddDemandeAgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDemandeAgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDemandeAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
