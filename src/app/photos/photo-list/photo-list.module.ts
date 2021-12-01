import { FilterByDescrition } from './photos/filter.bt.descrition.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescrition,
    SearchComponent
  ],
  imports: [ CommonModule, PhotoModule, CardModule]
})
export class PhotoListModule{

}
