import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../../components/service/form.service';

@Component({
  selector: 'angprj-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  animalsPictures!: any;

  constructor(readonly formService: FormService) { }

  ngOnInit(): void {
    this.animalsPictures = this.formService.getAnimalsPicture().subscribe(result => this.animalsPictures = result);
  }

}
