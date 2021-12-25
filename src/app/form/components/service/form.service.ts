import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  numb!: number;
  chosenAnimal!: string;
  // private errorMessage = '';

  constructor(private readonly http: HttpClient) { }

  getAnimalsPicture() {
    const params = new HttpParams()
    .set('count', this.numb)
    return this.http.get<string[]>(`${environment.apiUrl}${this.chosenAnimal}`, {params}); //tipizzare
  }

  // getErrorMessage(): string {
  //   return this.errorMessage;
  // }

  // resetMessage(): void {
  //   this.errorMessage = '';
  // }

}
