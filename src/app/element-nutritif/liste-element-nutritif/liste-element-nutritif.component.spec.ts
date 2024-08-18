import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeElementNutritifComponent } from './liste-element-nutritif.component';

describe('ListeElementNutritifComponent', () => {
  let component: ListeElementNutritifComponent;
  let fixture: ComponentFixture<ListeElementNutritifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeElementNutritifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeElementNutritifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
