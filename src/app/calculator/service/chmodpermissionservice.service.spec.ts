import { TestBed } from '@angular/core/testing';

import { ChmodPermissionDataService } from './chmodpermissiondata.service';

describe('PermissionDataService', () => {
  let service: ChmodPermissionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChmodPermissionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
