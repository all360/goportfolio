import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router }            from '@angular/router';
import {GalleryItem} from "../gallery/galleryItem";

import 'rxjs/add/operator/switchMap';
import {GalleryService} from "../gallery/gallery.service";

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.galleryService.getGalleryItem(+params['id']))
      .subscribe(item => this.galleryItem = item);

    this.router.events.subscribe((path) => {
     window.scrollTo(0, 0);
    });

  }

  goBack(): void {
    this.location.back();
  }

  gotoNextSlide(id): void {
    let link = ['/detail', id + 1];
    this.router.navigate(link);
  }

  gotoPreviousSlide(id): void {
    let link = ['/detail', id - 1];
    this.router.navigate(link);
  }


  @Input()
  galleryItem: GalleryItem;

}
