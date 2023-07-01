import { TestBed } from '@angular/core/testing';

import { WebBackendService } from './web-backend.service';

describe('WebBackendService', () => {
  let service: WebBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
