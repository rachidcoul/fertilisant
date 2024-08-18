import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRequerantComponent } from './liste-requerant.component';

describe('ListeRequerantComponent', () => {
  let component: ListeRequerantComponent;
  let fixture: ComponentFixture<ListeRequerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRequerantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeRequerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
