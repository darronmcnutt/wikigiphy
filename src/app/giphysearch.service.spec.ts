import { TestBed } from '@angular/core/testing';

import { GiphysearchService } from './giphysearch.service';

describe('GiphysearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphysearchService = TestBed.get(GiphysearchService);
    expect(service).toBeTruthy();
  });
});
