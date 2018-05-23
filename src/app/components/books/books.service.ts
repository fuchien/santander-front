import { books } from './../../shared/models/books/books';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../config';

// MODELS
import { event } from './../../shared/models/event/event';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private _http: HttpClient
  ) { }

  getData(event: event): Observable<books[]> {
    if (event.authorOrClient) {
      return this._http.get<books[]>(`${Config.backEndPoint}/books/by-title/${event.value}`)
    }
    return this._http.get<books[]>(`${Config.backEndPoint}/books/by-author/${event.value}`)
  }
}
