import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEchantillonComponent } from './edit-echantillon.component';

describe('EditEchantillonComponent', () => {
  let component: EditEchantillonComponent;
  let fixture: ComponentFixture<EditEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEchantillonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
