import { Component, OnInit } from '@angular/core';

// SERVICES
import { BooksService } from './books.service';
import { SnackBarService } from './../../shared/snack-bar/snack-bar.service';

// MODELS
import { books } from './../../shared/models/books/books';
import { event } from '../../shared/models/event/event';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: books[]
  public loading: boolean = false

  constructor(
    private booksService: BooksService,
    private snackBar: SnackBarService
  ) { }

  ngOnInit() {
  }

  passingData(event: event) {
    this.loading = true
    this.booksService.getData(event)
      .subscribe(
        (books: books[]) => {
          this.loading = false
          this.books = books
        },
        (err: any) => {
          this.loading = false
          this.snackBar.openSnackBar(`Error to get data!`, 'Close')
        }
      )
  }

}
