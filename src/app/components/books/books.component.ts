import { Component, OnInit } from '@angular/core';

// MODELS
import { books } from './../../shared/models/books/books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: books[]
  public loading: boolean = false

  constructor() { }

  ngOnInit() {
  }

  passingData(title: string) {
    console.log(title)
  }

}
