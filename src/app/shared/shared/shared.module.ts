import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Module
import { AngularMaterialModule } from './../../angular-material/angular-material.module';

// Components
import { CardsComponent } from './../cards/cards.component';
import { FormComponent } from './../form/form.component';

// Services
import { SnackBarService } from './../snack-bar/snack-bar.service';

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
  ],
  providers: [
    SnackBarService
  ]
})
export class SharedModule { }
