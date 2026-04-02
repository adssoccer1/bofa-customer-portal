import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '../shared/shared.module';

import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: ':id', component: AccountDetailComponent }
];

@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent,
    AccountSummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountsModule { }
