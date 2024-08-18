import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditControleInterneComponent } from './edit-controle-interne.component';

describe('EditControleInterneComponent', () => {
  let component: EditControleInterneComponent;
  let fixture: ComponentFixture<EditControleInterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditControleInterneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditControleInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
