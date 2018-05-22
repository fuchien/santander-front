import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './app-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULES
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SharedModule } from './shared/shared/shared.module';
import { BooksModule } from './components/books/books.module';

// COMPONENTS
import { ClientsComponent } from './components/clients/clients.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// SERVICES
import { ClientsService } from './components/clients/clients.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    BooksModule
  ],
  providers: [
    ClientsService,
    // { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
