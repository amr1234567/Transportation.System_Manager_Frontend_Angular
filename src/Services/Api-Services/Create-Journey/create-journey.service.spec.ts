import { TestBed } from '@angular/core/testing';

import { CreateJourneyService } from './create-journey.service';

describe('CreateJourneyService', () => {
  let service: CreateJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
