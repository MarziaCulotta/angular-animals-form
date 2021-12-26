import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  numb!: number;
  chosenAnimal!: string;
  errorMessage = 'So Sorry! You must choose at least one picture to let the magic happens!';

  constructor(private readonly http: HttpClient) { }

  getAnimalsPicture() {
    const params = new HttpParams()
    .set('count', this.numb)
    return this.http.get(`${environment.apiUrl}${this.chosenAnimal}`, {params});
  }

  getErrorMessage(): any {
    if (this.numb <= 0 ) {
      return this.errorMessage;
    }
  }

}
