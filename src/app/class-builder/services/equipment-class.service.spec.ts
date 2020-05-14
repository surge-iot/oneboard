import { TestBed } from '@angular/core/testing';

import { EquipmentClassService } from './equipment-class.service';

describe('EquipmentClassService', () => {
  let service: EquipmentClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
