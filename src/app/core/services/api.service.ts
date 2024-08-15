import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _HttpClient = inject(HttpClient)

  getData():Observable<any>
  {
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
}
