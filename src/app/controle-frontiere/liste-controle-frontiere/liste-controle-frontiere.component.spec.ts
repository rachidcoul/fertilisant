import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeControleFrontiereComponent } from './liste-controle-frontiere.component';

describe('ListeControleFrontiereComponent', () => {
  let component: ListeControleFrontiereComponent;
  let fixture: ComponentFixture<ListeControleFrontiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeControleFrontiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeControleFrontiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
