import { TestBed } from '@angular/core/testing';

import { LogOutService } from './lg-out.service';

describe('LgOutService', () => {
  let service: LogOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
