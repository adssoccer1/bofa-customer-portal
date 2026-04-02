import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Transaction, TransactionFilter } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private mockTransactions: Transaction[] = [
    {
      id: 'TXN001', accountId: 'ACC001', date: new Date('2024-01-15'),
      description: 'Direct Deposit - Employer', amount: 3250.00, type: 'credit',
      category: 'Income', status: 'completed', merchant: 'ACME Corp'
    },
    {
      id: 'TXN002', accountId: 'ACC001', date: new Date('2024-01-14'),
      description: 'Grocery Store Purchase', amount: -87.43, type: 'debit',
      category: 'Groceries', status: 'completed', merchant: 'Whole Foods'
    },
    {
      id: 'TXN003', accountId: 'ACC001', date: new Date('2024-01-13'),
      description: 'Electric Bill Payment', amount: -142.50, type: 'debit',
      category: 'Utilities', status: 'completed', merchant: 'Duke Energy'
    },
    {
      id: 'TXN004', accountId: 'ACC001', date: new Date('2024-01-12'),
      description: 'Restaurant - Dinner', amount: -65.20, type: 'debit',
      category: 'Dining', status: 'completed', merchant: 'Olive Garden'
    },
    {
      id: 'TXN005', accountId: 'ACC001', date: new Date('2024-01-11'),
      description: 'ATM Withdrawal', amount: -200.00, type: 'debit',
      category: 'Cash', status: 'completed', merchant: 'BofA ATM'
    },
    {
      id: 'TXN006', accountId: 'ACC001', date: new Date('2024-01-10'),
      description: 'Online Transfer to Savings', amount: -500.00, type: 'debit',
      category: 'Transfer', status: 'completed', merchant: 'Internal'
    },
    {
      id: 'TXN007', accountId: 'ACC002', date: new Date('2024-01-10'),
      description: 'Transfer from Checking', amount: 500.00, type: 'credit',
      category: 'Transfer', status: 'completed', merchant: 'Internal'
    },
    {
      id: 'TXN008', accountId: 'ACC003', date: new Date('2024-01-09'),
      description: 'Gas Station', amount: -45.30, type: 'debit',
      category: 'Transportation', status: 'completed', merchant: 'Shell'
    },
    {
      id: 'TXN009', accountId: 'ACC001', date: new Date('2024-01-08'),
      description: 'Subscription - Streaming', amount: -15.99, type: 'debit',
      category: 'Entertainment', status: 'completed', merchant: 'Netflix'
    },
    {
      id: 'TXN010', accountId: 'ACC001', date: new Date('2024-01-07'),
      description: 'Pharmacy Purchase', amount: -32.15, type: 'debit',
      category: 'Healthcare', status: 'pending', merchant: 'CVS Pharmacy'
    }
  ];

  getTransactions(accountId?: string): Observable<Transaction[]> {
    let transactions = this.mockTransactions;
    if (accountId) {
      transactions = transactions.filter(t => t.accountId === accountId);
    }
    return of(transactions).pipe(delay(300));
  }

  getTransactionById(id: string): Observable<Transaction | undefined> {
    const transaction = this.mockTransactions.find(t => t.id === id);
    return of(transaction).pipe(delay(200));
  }

  getFilteredTransactions(filter: TransactionFilter): Observable<Transaction[]> {
    return this.getTransactions().pipe(
      map(transactions => {
        return transactions.filter(t => {
          if (filter.startDate && new Date(t.date) < filter.startDate) return false;
          if (filter.endDate && new Date(t.date) > filter.endDate) return false;
          if (filter.minAmount != null && Math.abs(t.amount) < filter.minAmount) return false;
          if (filter.maxAmount != null && Math.abs(t.amount) > filter.maxAmount) return false;
          if (filter.type && filter.type !== 'all' && t.type !== filter.type) return false;
          if (filter.category && filter.category !== 'all' && t.category !== filter.category) return false;
          return true;
        });
      })
    );
  }

  getCategories(): string[] {
    return ['Income', 'Groceries', 'Utilities', 'Dining', 'Cash', 'Transfer', 'Transportation', 'Entertainment', 'Healthcare'];
  }
}
