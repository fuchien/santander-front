import { Component, OnInit, Input } from '@angular/core';

// MODELS
import { books } from './../models/books/books';
import { clients } from './../models/clients/clients';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() client: clients
  @Input() book: books

  constructor() { }

  ngOnInit() {
  }

}
