import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { LoansComponent } from './loans/loans.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { ClientsComponent } from './clients/clients.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent,
    LoansComponent,
    ViewContactComponent,
    ClientsComponent,
    PageNotFoundComponent,
    LoanTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
