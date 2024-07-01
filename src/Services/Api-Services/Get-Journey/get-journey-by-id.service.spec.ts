import { TestBed } from '@angular/core/testing';

import { GetJourneyByIdService } from './get-journey-by-id.service';

describe('GetJourneyByIdService', () => {
  let service: GetJourneyByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJourneyByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
