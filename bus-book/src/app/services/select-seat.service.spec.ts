import { TestBed } from '@angular/core/testing';

import { SelectSeatService } from './select-seat.service';

describe('SelectSeatService', () => {
  let service: SelectSeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
