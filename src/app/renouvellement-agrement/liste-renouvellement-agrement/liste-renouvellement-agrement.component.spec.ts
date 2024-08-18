import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRenouvellementAgrementComponent } from './liste-renouvellement-agrement.component';

describe('ListeRenouvellementAgrementComponent', () => {
  let component: ListeRenouvellementAgrementComponent;
  let fixture: ComponentFixture<ListeRenouvellementAgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRenouvellementAgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeRenouvellementAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
