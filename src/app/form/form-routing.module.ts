import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';



const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'gallery', loadChildren: () => import('./pages/gallery.module') }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
