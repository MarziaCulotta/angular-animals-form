import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/components/form/form.component';
import { GalleryComponent } from './form/pages/gallery/gallery.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
