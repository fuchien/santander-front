import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { AngularMaterialModule } from './../../angular-material/angular-material.module';

// Components
import { CardsComponent } from './../cards/cards.component';
import { FormComponent } from './../form/form.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [
    FormComponent,
    CardsComponent
  ],
  exports: [
    FormComponent,
    CardsComponent
  ]
})
export class SharedModule { }
