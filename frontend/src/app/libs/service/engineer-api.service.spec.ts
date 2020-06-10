import { TestBed } from '@angular/core/testing';

import { EngineerApiService } from './engineer-api.service';

describe('HttpListService', () => {
  let service: EngineerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngineerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
