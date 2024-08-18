import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeControleInterneComponent } from './liste-controle-interne.component';

describe('ListeControleInterneComponent', () => {
  let component: ListeControleInterneComponent;
  let fixture: ComponentFixture<ListeControleInterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeControleInterneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeControleInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
