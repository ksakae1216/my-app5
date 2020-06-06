import { TestBed } from '@angular/core/testing';

import { EngineerDataService } from './engineer-data.service';

describe('EngineerDataService', () => {
  let service: EngineerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngineerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
