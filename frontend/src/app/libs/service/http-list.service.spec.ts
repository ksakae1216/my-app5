import { TestBed } from '@angular/core/testing';

import { HttpListService } from './http-list.service';

describe('HttpListService', () => {
  let service: HttpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
