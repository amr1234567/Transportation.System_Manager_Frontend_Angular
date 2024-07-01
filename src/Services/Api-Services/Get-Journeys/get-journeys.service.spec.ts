import { TestBed } from '@angular/core/testing';

import { GetJourneysService } from './get-journeys.service';

describe('GetJourneysService', () => {
  let service: GetJourneysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJourneysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
