import { TestBed } from '@angular/core/testing';

import { PointClassService } from './point-class.service';

describe('PointClassService', () => {
  let service: PointClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
