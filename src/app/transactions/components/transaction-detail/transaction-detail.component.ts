import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction.model';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    const txnId = this.route.snapshot.paramMap.get('id');
    if (txnId) {
      this.transactionService.getTransactionById(txnId).subscribe(txn => {
        this.transaction = txn;
        this.isLoading = false;
      });
    }
  }
}
