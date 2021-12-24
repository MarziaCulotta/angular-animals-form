import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../service/form.service';

@Component({
  selector: 'angprj-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private readonly router: Router,  readonly formService: FormService) {

  }

  ngOnInit(): void { }


  btnClick() {
    this.router.navigateByUrl('/gallery');
  }
}
