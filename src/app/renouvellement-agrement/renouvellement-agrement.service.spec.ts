import { TestBed } from '@angular/core/testing';

import { RenouvellementAgrementService } from './renouvellement-agrement.service';

describe('RenouvellementAgrementService', () => {
  let service: RenouvellementAgrementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenouvellementAgrementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
