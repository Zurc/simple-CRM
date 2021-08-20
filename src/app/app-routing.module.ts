import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }