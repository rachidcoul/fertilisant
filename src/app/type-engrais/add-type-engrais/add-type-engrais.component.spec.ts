import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeEngraisComponent } from './add-type-engrais.component';

describe('AddTypeEngraisComponent', () => {
  let component: AddTypeEngraisComponent;
  let fixture: ComponentFixture<AddTypeEngraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTypeEngraisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTypeEngraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
