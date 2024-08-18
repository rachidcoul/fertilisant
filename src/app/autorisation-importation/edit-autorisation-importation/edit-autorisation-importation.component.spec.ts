import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutorisationImportationComponent } from './edit-autorisation-importation.component';

describe('EditAutorisationImportationComponent', () => {
  let component: EditAutorisationImportationComponent;
  let fixture: ComponentFixture<EditAutorisationImportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAutorisationImportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAutorisationImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
