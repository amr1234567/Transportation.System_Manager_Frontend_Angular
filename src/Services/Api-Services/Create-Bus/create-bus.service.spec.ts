import { TestBed } from '@angular/core/testing';

import { CreateBusService } from './create-bus.service';

describe('CreateBusService', () => {
  let service: CreateBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
