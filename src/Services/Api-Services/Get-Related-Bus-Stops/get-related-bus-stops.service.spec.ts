import { TestBed } from '@angular/core/testing';

import { GetRelatedBusStopsService } from './get-related-bus-stops.service';

describe('GetRelatedBusStopsService', () => {
  let service: GetRelatedBusStopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRelatedBusStopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
