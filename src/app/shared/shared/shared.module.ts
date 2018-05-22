import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Module
import { AngularMaterialModule } from './../../angular-material/angular-material.module';

// Components
import { CardsComponent } from './../cards/cards.component';
import { FormComponent } from './../form/form.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    FormComponent,
    CardsComponent
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormComponent,
    CardsComponent
  ]
})
export class SharedModule { }
