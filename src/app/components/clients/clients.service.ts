import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private _http: HttpClient
  ) { }

  postData(data: string): Observable<any> {
    return this._http.post(`http://www.mocky.io/v2/5b03760c3000005a00cee55d`, JSON.stringify(data))
  }
}
