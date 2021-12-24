import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  numb!: number;

  constructor(private readonly http: HttpClient) { }

  getShibesPicture(numb = 1) {
    const params = new HttpParams()
    .set('count', numb)
    return this.http.get(environment.shibesApiUrl, {params});
  }

  getCats(numb = 1) {
    const params = new HttpParams()
    .set('count', this.numb)
    return this.http.get(environment.catsApiUrl, {params});
  }

  getBirds(numb = 1) {
    const params = new HttpParams()
    .set('count', this.numb)
    return this.http.get(environment.birdsApiUrl, {params});
  }
}
