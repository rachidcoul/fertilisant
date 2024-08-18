import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeAgrementComponent } from './liste-demande-agrement.component';

describe('ListeDemandeAgrementComponent', () => {
  let component: ListeDemandeAgrementComponent;
  let fixture: ComponentFixture<ListeDemandeAgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDemandeAgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeDemandeAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
