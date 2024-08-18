import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommuneComponent } from './liste-commune.component';

describe('ListeCommuneComponent', () => {
  let component: ListeCommuneComponent;
  let fixture: ComponentFixture<ListeCommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCommuneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
