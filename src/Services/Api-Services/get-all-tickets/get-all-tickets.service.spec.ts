import { TestBed } from '@angular/core/testing';

import { GetAllTicketsService } from './get-all-tickets.service';

describe('GetAllTicketsService', () => {
  let service: GetAllTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
