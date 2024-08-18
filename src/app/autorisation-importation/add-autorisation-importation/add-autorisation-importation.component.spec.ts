import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutorisationImportationComponent } from './add-autorisation-importation.component';

describe('AddAutorisationImportationComponent', () => {
  let component: AddAutorisationImportationComponent;
  let fixture: ComponentFixture<AddAutorisationImportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAutorisationImportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAutorisationImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
