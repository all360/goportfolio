import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { GalleryItem } from '../gallery/galleryItem';

@Injectable()
export class GallerySearchService {

  constructor( private http: Http) { }

  search( term: string): Observable<GalleryItem[]>{

    console.log( "term", term );

    return this.http
      .get(`app/gallery/?name=${term}`)
      .map((r: Response) => r.json().data as GalleryItem[]);
  }

}
