import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProvinceComponent } from './liste-province.component';

describe('ListeProvinceComponent', () => {
  let component: ListeProvinceComponent;
  let fixture: ComponentFixture<ListeProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeProvinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
