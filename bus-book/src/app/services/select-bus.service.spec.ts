import { TestBed } from '@angular/core/testing';

import { SelectBusService } from './get-bus.service';

describe('SelectBusService', () => {
  let service: SelectBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
