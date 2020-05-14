import { TestBed } from '@angular/core/testing';

import { LocationClassService } from './location-class.service';

describe('LocationClassService', () => {
  let service: LocationClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
