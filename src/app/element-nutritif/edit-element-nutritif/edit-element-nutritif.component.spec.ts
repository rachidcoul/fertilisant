import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElementNutritifComponent } from './edit-element-nutritif.component';

describe('EditElementNutritifComponent', () => {
  let component: EditElementNutritifComponent;
  let fixture: ComponentFixture<EditElementNutritifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditElementNutritifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditElementNutritifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
