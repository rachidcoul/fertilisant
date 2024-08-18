import { TestBed } from '@angular/core/testing';

import { TypeEngraisService } from './type-engrais.service';

describe('TypeEngraisService', () => {
  let service: TypeEngraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeEngraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
