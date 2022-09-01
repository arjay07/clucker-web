import { TestBed } from '@angular/core/testing';

import { CluckLoaderService } from './cluck-loader.service';

describe('CluckLoaderService', () => {
  let service: CluckLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CluckLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
