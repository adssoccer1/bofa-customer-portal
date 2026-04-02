import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { TransactionService } from '../../../services/transaction.service';
import { Account } from '../../../models/account.model';
import { Transaction } from '../../../models/transaction.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  account: Account | undefined;
  recentTransactions: Transaction[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    const accountId = this.route.snapshot.paramMap.get('id');
    if (accountId) {
      this.accountService.getAccountById(accountId).subscribe(account => {
        this.account = account;
        this.isLoading = false;
      });
      this.transactionService.getTransactions(accountId).subscribe(transactions => {
        this.recentTransactions = transactions.slice(0, 5);
      });
    }
  }
}
