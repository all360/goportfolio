import { Component, OnInit } from '@angular/core';
import { Gallery } from './gallery';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Gallery[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getGallery()
      .subscribe(data => this.gallery = data);
  }

}
