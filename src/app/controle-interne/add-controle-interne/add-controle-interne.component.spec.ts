import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControleInterneComponent } from './add-controle-interne.component';

describe('AddControleInterneComponent', () => {
  let component: AddControleInterneComponent;
  let fixture: ComponentFixture<AddControleInterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddControleInterneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddControleInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
