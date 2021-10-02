import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent,
  },
  {
    path: 'loan-types',
    component: LoanTypesComponent,
  },
  {
    path: 'contact',
    component: ViewContactComponent,
    outlet: 'viewContact',
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
