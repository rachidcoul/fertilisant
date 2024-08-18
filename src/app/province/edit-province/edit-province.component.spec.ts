import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvinceComponent } from './edit-province.component';

describe('EditProvinceComponent', () => {
  let component: EditProvinceComponent;
  let fixture: ComponentFixture<EditProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProvinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
