import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAutorisationImportationComponent } from './liste-autorisation-importation.component';

describe('ListeAutorisationImportationComponent', () => {
  let component: ListeAutorisationImportationComponent;
  let fixture: ComponentFixture<ListeAutorisationImportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAutorisationImportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeAutorisationImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
