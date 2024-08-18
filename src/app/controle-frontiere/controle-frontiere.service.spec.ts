import { TestBed } from '@angular/core/testing';

import { ControleFrontiereService } from './controle-frontiere.service';

describe('ControleFrontiereService', () => {
  let service: ControleFrontiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleFrontiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
