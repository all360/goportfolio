import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerySearchComponent } from './gallery-search/gallery-search.component';
import { GalleryService } from './gallery/gallery.service';
import { ItemDetailsComponent } from './item-details/item-details.component';

/*import {enableProdMode} from '@angular/core';
enableProdMode();
*/

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GallerySearchComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ]),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ GalleryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
