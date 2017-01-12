import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { GalleryItem } from './galleryItem';

@Injectable()
export class GalleryService {

  private galleryUrl = 'app/gallery'; // URI to web api
  constructor(private http: Http) { }


  getGallery( type:string, value:string ):Promise<GalleryItem[]> {

    return this.http
      .get( `app/gallery/?`+type+`=`+ value )
      .toPromise()
      .then(response => response.json().data as GalleryItem[])
      .catch(this.handleError);
  }

  getGalleryById():Promise<GalleryItem[]> {

    return this.http
      .get( `app/gallery`)
      .toPromise()
      .then(response => response.json().data as GalleryItem[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getGalleryItem(id: number): Promise<GalleryItem> {
    return this.getGalleryById()
      .then(galleryItems => galleryItems.find(item => item.id === id));
  }
}
