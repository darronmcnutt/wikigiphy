import { TestBed } from '@angular/core/testing';

import { WikisearchService } from './wikisearch.service';

describe('WikisearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikisearchService = TestBed.get(WikisearchService);
    expect(service).toBeTruthy();
  });
});
