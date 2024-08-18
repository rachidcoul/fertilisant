import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeEngraisComponent } from './edit-type-engrais.component';

describe('EditTypeEngraisComponent', () => {
  let component: EditTypeEngraisComponent;
  let fixture: ComponentFixture<EditTypeEngraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTypeEngraisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTypeEngraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
