import { TestBed } from '@angular/core/testing';

import { GetTicketByIdService } from './get-ticket-by-id.service';

describe('GetTicketByIdService', () => {
  let service: GetTicketByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTicketByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
