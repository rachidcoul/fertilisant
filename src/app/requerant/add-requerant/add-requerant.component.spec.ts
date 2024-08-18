import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequerantComponent } from './add-requerant.component';

describe('AddRequerantComponent', () => {
  let component: AddRequerantComponent;
  let fixture: ComponentFixture<AddRequerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRequerantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRequerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
