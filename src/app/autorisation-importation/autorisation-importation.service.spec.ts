import { TestBed } from '@angular/core/testing';

import { AutorisationImportationService } from './autorisation-importation.service';

describe('AutorisationImportationService', () => {
  let service: AutorisationImportationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorisationImportationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
