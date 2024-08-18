import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeEngraisComponent } from './liste-type-engrais.component';

describe('ListeTypeEngraisComponent', () => {
  let component: ListeTypeEngraisComponent;
  let fixture: ComponentFixture<ListeTypeEngraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeTypeEngraisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeTypeEngraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
