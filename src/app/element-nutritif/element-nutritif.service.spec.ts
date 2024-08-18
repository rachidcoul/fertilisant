import { TestBed } from '@angular/core/testing';

import { ElementNutritifService } from './element-nutritif.service';

describe('ElementNutritifService', () => {
  let service: ElementNutritifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementNutritifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
