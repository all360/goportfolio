import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.galleryService.getGalleryItem(+params['id']))
      .subscribe(item => this.galleryItem = item);
  }

  goBack(): void {
    this.location.back();
  }

  @Input()
  galleryItem: GalleryItem;

}
