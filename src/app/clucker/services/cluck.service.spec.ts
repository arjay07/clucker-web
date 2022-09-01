import { TestBed } from '@angular/core/testing';

import { CluckService } from './cluck.service';

describe('CluckService', () => {
  let service: CluckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CluckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
