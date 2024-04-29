import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';


@NgModule({
  declarations: [
    SearchComponent,
    ListComponent,
    GifsCardComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchComponent,
    ListComponent
  ]
})
export class GifsModule { }
