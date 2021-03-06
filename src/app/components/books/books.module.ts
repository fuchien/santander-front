import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// MODULES
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { SharedModule } from './../../shared/shared/shared.module';

// COMPONENTS
import { BooksComponent } from './books.component';

// SERVICES
import { BooksService } from './books.service';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ],
  declarations: [
    BooksComponent
  ],
  exports: [
    BooksComponent
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
