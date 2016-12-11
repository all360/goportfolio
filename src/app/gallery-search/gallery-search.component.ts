import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
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
  myValue: string;

  constructor( private gallerySearchService: GallerySearchService,
               private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    if( term.length > 1){
      console.log(term);
      this.searchTerms.next(term);
    }
  }

  ngOnInit(): void {
    this.myValue = "";

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
    this.router.navigate(link);

    this.myValue = "";
  }


}
