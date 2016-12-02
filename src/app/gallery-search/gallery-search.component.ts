import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { GallerySearchService } from './gallery-search.service';
import { GalleryItem } from '../gallery/galleryItem';


@Component({
  selector: 'gallery-search',
  templateUrl:'gallery-search.component.html',
  styleUrls: ['gallery-search.component.css'],
  providers: [GallerySearchService]
})

export class GallerySearchComponent implements OnInit {

  galleryItems: Observable<GalleryItem[]>;
  private searchTerms = new Subject<string>();

  constructor( private gallerySearchService: GallerySearchService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.galleryItems = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.gallerySearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<GalleryItem[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<GalleryItem[]>([]);
      });
  }

  gotoDetail(item: GalleryItem): void {
    let link = ['/detail', item.id];
    console.log("link", link);
    //this.router.navigate(link);
  }


}
