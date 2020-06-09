import { TestBed } from '@angular/core/testing';

import { DeviceClassService } from './device-class.service';

describe('DeviceClassService', () => {
  let service: DeviceClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
