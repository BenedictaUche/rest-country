import { TestBed } from '@angular/core/testing';

import { VisitedCountriesService } from './visited-countries.service';

describe('VisitedCountriesService', () => {
  let service: VisitedCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitedCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
