import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../../components/service/form.service';

@Component({
  selector: 'angprj-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  animalsPicture!: Object;
  sub!: Subscription;
  // private errorMessage = 'Error! You must choose at least one picture!';

  constructor(readonly formService: FormService) { }

  ngOnInit(): void {
    this.sub = this.formService.getAnimalsPicture().subscribe((result: Object) => {this.animalsPicture = result, console.log(result)})
  }

  // ngOnInit(): void {
  //   this.sub = this.formService.getAnimalsPicture().subscribe((result: Object) => {this.animalsPicture = result >= 1 ? result : "Error! You have to choose at least one picture!", console.log(result)})
  // }

  // ngOnDestroy() {
  //   this.sub.unsubscribe()
  // }
  // console.log(res)

}
