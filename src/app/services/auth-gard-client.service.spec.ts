import { TestBed } from '@angular/core/testing';

import { AuthGardClientService } from './auth-gard-client.service';

describe('AuthGardClientService', () => {
  let service: AuthGardClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGardClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
