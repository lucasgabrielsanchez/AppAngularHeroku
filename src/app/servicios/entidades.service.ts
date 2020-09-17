import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntidadesService {
  constructor(private _http: HttpClient) {}

  obtenerEntidades(): Observable<any> {
    return this._http.get('https://api.mocki.io/v1/570c5e5c');
  }
}
