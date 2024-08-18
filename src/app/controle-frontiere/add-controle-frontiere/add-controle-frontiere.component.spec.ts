import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControleFrontiereComponent } from './add-controle-frontiere.component';

describe('AddControleFrontiereComponent', () => {
  let component: AddControleFrontiereComponent;
  let fixture: ComponentFixture<AddControleFrontiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddControleFrontiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddControleFrontiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
