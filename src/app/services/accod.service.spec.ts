import { TestBed } from '@angular/core/testing';

import { AccodService } from './accod.service';

describe('AccodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccodService = TestBed.get(AccodService);
    expect(service).toBeTruthy();
  });
});
