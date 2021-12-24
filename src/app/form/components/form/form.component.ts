import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../service/form.service';

@Component({
  selector: 'angprj-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  animals: string[] = ["Shibes", "Cats", "Birds"];

  constructor(private readonly router: Router, private readonly formService: FormService) {

  }

  ngOnInit(): void {
  }

  ShowShibes() {
    this.formService.getShibesPicture().subscribe(response => console.log(response)
    )
  }

  btnClick() {
    this.router.navigateByUrl('/gallery');
  }
}
