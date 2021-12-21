import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private readonly http: HttpClient) {}

  getShibe() {
    const params = new HttpParams()

      .set('count', 1 - 100)
      .set('urls', true)
      .set('nttpUrls', true);

    return this.http.get(environment.shibesApiUrl, { params });
  }
}
