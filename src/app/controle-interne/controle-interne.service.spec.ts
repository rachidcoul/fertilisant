import { TestBed } from '@angular/core/testing';

import { ControleInterneService } from './controle-interne.service';

describe('ControleInterneService', () => {
  let service: ControleInterneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleInterneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
