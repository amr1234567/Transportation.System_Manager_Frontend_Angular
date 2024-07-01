import { TestBed } from '@angular/core/testing';

import { TitleSetterService } from './title-setter.service';

describe('TitleSetterService', () => {
  let service: TitleSetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleSetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
