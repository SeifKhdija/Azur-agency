import { TestBed } from '@angular/core/testing';

import { ProportiesService } from './proporties.service';

describe('ProportiesService', () => {
  let service: ProportiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProportiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
