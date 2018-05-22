import { books } from './../../shared/models/books/books';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private _http: HttpClient
  ) { }

  getData(title: string): Observable<books[]> {
    return this._http.get<books[]>(`${Config.backEndPoint}/books/by-title/${title}`)
  }
}
