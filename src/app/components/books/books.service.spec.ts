import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BooksService } from './books.service';

fdescribe('BooksService', () => {

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [
        HttpClientTestingModule
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));

  it('validate function getData', inject([BooksService], (service: BooksService) => {
    expect(service.getData({value: '', authorOrClient: false})).not.toBeUndefined
    expect(service.getData({value: '', authorOrClient: true})).not.toBeUndefined
  }));
});
