import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRenouvellementAgrementComponent } from './edit-renouvellement-agrement.component';

describe('EditRenouvellementAgrementComponent', () => {
  let component: EditRenouvellementAgrementComponent;
  let fixture: ComponentFixture<EditRenouvellementAgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRenouvellementAgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRenouvellementAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
