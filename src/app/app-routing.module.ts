import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'detail/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
