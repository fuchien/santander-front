import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { SnackBarService } from './../../shared/snack-bar/snack-bar.service';
import { BooksService } from './books.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { Observable } from 'rxjs';
import { of, throwError } from "rxjs";

fdescribe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        SharedModule
      ],
      declarations: [
        BooksComponent
      ],
      providers: [
        BooksService,
        SnackBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate function passingData', inject([BooksService], (service: BooksService) => {
    const response = []
    spyOn(service, 'getData').and.returnValue(of(response))
    component.passingData({value: '', authorOrClient: false});
    fixture.detectChanges();
    expect(component.books).toEqual([])
  }));

  it('validate function passingData ERROR', inject([BooksService], (service: BooksService) => {
    spyOn(service, 'getData').and.returnValue(throwError({status: 404}))
    component.passingData({value: '', authorOrClient: false});
    fixture.detectChanges();
    expect(component.books).not.toBeUndefined
  }));
});
