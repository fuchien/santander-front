import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from './../../config';

// MODELS
import { clients } from './../../shared/models/clients/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private _http: HttpClient
  ) { }

  postData(name: string): Observable<clients[]> {
    return this._http.get<clients[]>(`${Config.backEndPoint}/clients/${name}`)
  }
}
