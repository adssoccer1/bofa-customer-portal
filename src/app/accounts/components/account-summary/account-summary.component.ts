import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../../models/account.model';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent {
  @Input() account!: Account;

  constructor(private router: Router) {}

  getAccountTypeIcon(): string {
    switch (this.account.accountType) {
      case 'checking': return 'account_balance';
      case 'savings': return 'savings';
      case 'credit': return 'credit_card';
      case 'investment': return 'trending_up';
      default: return 'account_balance_wallet';
    }
  }

  viewDetails(): void {
    this.router.navigate(['/accounts', this.account.id]);
  }
}
