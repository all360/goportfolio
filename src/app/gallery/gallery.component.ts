import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryItem } from './galleryItem';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: GalleryItem[];
  selectedItem: GalleryItem;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
      this.getGallery()
  }

  getGallery(): void {
    this.galleryService
      .getGallery()
      .then(data => this.gallery = data);
  }


  onSelect(item: GalleryItem): void {
    this.selectedItem = item;
  }

  gotoDetail(): void {
    console.log( "this.selectedHero.id", this.selectedItem.id );
    //this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
