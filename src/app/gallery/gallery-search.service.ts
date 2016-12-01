import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { GalleryItem } from './galleryItem';

@Injectable()
export class GallerySearchService {

  constructor( private http: Http) { }

  search( term: string): Observable<GalleryItem[]>{

    return this.http
      .get(app/galleryData.json)
  }

}
