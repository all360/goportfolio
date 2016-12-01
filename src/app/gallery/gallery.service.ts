import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GalleryItem } from './galleryItem';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  getGallery() {
    return this.http.get('app/galleryData.json')
      .map(response => <GalleryItem[]> response.json().galleryData);
  }
}
