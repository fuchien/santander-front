import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULES
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SharedModule } from './shared/shared/shared.module';

// COMPONENTS
import { BooksComponent } from './components/books/books.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// SERVICES
import { ClientsService } from './components/clients/clients.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ToolbarComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
