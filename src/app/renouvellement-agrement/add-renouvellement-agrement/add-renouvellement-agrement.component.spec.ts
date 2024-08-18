import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRenouvellementAgrementComponent } from './add-renouvellement-agrement.component';

describe('AddRenouvellementAgrementComponent', () => {
  let component: AddRenouvellementAgrementComponent;
  let fixture: ComponentFixture<AddRenouvellementAgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRenouvellementAgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRenouvellementAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
