import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditControleFrontiereComponent } from './edit-controle-frontiere.component';

describe('EditControleFrontiereComponent', () => {
  let component: EditControleFrontiereComponent;
  let fixture: ComponentFixture<EditControleFrontiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditControleFrontiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditControleFrontiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
