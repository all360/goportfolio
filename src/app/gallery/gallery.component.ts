import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './galleryItem';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: GalleryItem[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getGallery()
      .subscribe(data => this.gallery = data);
  }

  selectedItem: GalleryItem;

  onSelect(item: GalleryItem): void {
    this.selectedItem = item;
  }

}
