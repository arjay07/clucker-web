import { TestBed } from '@angular/core/testing';

import { LandingFormService } from './landing-form.service';

describe('LandingFormService', () => {
  let service: LandingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
