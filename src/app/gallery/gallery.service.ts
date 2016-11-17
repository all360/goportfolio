import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Gallery } from './gallery';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  getGallery() {
    return this.http.get('app/gallery.json')
      .map(response => <Gallery[]>response.json().galleryData);
  }
}
