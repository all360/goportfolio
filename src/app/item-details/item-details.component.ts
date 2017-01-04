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

  carouselSlides = [];
  iframeCarouselNumber: number = 0;

  onLoadFunc( myIframe, index) {
    //this.source = myIframe.contentWindow.location.href;
    this.carouselSlides[index] = myIframe.contentWindow || myIframe.contentDocument;

    if( index === 0){
      this.iframeContentInit();
    }
  }



  nextSlide():void {
    this.iframeCarouselNumber++;
    if( this.iframeCarouselNumber >= this.carouselSlides.length ){
      this.iframeCarouselNumber = 0;
    }
    this.iframeContentInit();
  }

  prevSlide():void {
    this.iframeCarouselNumber--;
    if( this.iframeCarouselNumber < 0 ){
      this.iframeCarouselNumber = this.carouselSlides.length -1;
    }
    this.iframeContentInit();
  }

  iframeContentInit(): void{

    if( this.carouselSlides[this.iframeCarouselNumber].start != null){
      this.carouselSlides[this.iframeCarouselNumber].start();
    }
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
