import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:frontend/src/app/libs/service/engineer-api.service.spec.ts
import { EngineerApiService } from './engineer-api.service';
=======
import { HttpListService } from './http-engineer.service';
>>>>>>> master:frontend/src/app/libs/service/http-engineer.service.spec.ts

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
