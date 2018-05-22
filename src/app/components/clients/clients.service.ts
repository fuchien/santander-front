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
    return this._http.post(`https://www.mocky.io/v2/5b0380b53000006e00cee577`, JSON.stringify(data))
  }
}
