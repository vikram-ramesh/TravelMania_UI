import { TestBed } from '@angular/core/testing';

import { ShareFlightDetailsService } from './share-flight-details.service';

describe('ShareFlightDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareFlightDetailsService = TestBed.get(ShareFlightDetailsService);
    expect(service).toBeTruthy();
  });
});
