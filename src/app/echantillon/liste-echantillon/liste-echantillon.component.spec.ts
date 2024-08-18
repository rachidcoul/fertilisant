import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEchantillonComponent } from './liste-echantillon.component';

describe('ListeEchantillonComponent', () => {
  let component: ListeEchantillonComponent;
  let fixture: ComponentFixture<ListeEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEchantillonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
