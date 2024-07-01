import { TestBed } from '@angular/core/testing';

import { CutTicketService } from './cut-ticket.service';

describe('CutTicketService', () => {
  let service: CutTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
