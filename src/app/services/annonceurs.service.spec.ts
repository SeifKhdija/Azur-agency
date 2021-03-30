import { TestBed } from '@angular/core/testing';

import { AnnonceursService } from './annonceurs.service';

describe('AnnonceursService', () => {
  let service: AnnonceursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnonceursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
