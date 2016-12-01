/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GallerySearchService } from './gallery-search.service';

describe('Service: GallerySearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GallerySearchService]
    });
  });

  it('should ...', inject([GallerySearchService], (service: GallerySearchService) => {
    expect(service).toBeTruthy();
  }));
});
