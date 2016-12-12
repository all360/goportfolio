import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
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
  isMouseOver: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private galleryService: GalleryService) { }

  ngOnInit() {
      this.getGallery();
  }

  getGallery(): void {

    this.route.params
      .switchMap((params: Params) => this.galleryService.getGallery( params['type'], params['value'] ))
      .subscribe(data => this.gallery = data);
  }


  onSelect(item: GalleryItem): void {
    this.selectedItem = item;
    this.gotoDetail();
  }


  over():void{
    this.isMouseOver = true;
    console.log("Mouseover called" , this.isMouseOver);
  }


  gotoDetail(): void {
    console.log( "selectedItem.id", this.selectedItem.id );
    this.router.navigate(['/detail', this.selectedItem.id]);
  }

}
