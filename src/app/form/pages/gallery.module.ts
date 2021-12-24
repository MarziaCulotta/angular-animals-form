import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GalleryModule { }
