import { Component, Input } from '@angular/core';
import {GalleryItem} from "../gallery/galleryItem";

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent{

  @Input()
  galleryItem: GalleryItem;

}
