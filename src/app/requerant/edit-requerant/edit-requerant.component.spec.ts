import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequerantComponent } from './edit-requerant.component';

describe('EditRequerantComponent', () => {
  let component: EditRequerantComponent;
  let fixture: ComponentFixture<EditRequerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRequerantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRequerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
