import { TestBed } from '@angular/core/testing';

import { AcceuilimgService } from './acceuilimg.service';

describe('AcceuilimgService', () => {
  let service: AcceuilimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuilimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
