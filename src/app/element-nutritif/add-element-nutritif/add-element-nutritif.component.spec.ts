import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementNutritifComponent } from './add-element-nutritif.component';

describe('AddElementNutritifComponent', () => {
  let component: AddElementNutritifComponent;
  let fixture: ComponentFixture<AddElementNutritifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddElementNutritifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddElementNutritifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
