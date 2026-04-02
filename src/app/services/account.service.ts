import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private mockAccounts: Account[] = [
    {
      id: 'ACC001',
      accountNumber: '****4521',
      accountType: 'checking',
      name: 'Primary Checking',
      balance: 12543.67,
      availableBalance: 12043.67,
      currency: 'USD',
      lastUpdated: new Date('2024-01-15'),
      status: 'active'
    },
    {
      id: 'ACC002',
      accountNumber: '****8834',
      accountType: 'savings',
      name: 'Emergency Savings',
      balance: 45200.00,
      availableBalance: 45200.00,
      currency: 'USD',
      lastUpdated: new Date('2024-01-15'),
      status: 'active'
    },
    {
      id: 'ACC003',
      accountNumber: '****2210',
      accountType: 'credit',
      name: 'Platinum Rewards Card',
      balance: -2340.55,
      availableBalance: 17659.45,
      currency: 'USD',
      lastUpdated: new Date('2024-01-14'),
      status: 'active'
    },
    {
      id: 'ACC004',
      accountNumber: '****6677',
      accountType: 'investment',
      name: 'Merrill Edge Brokerage',
      balance: 89450.23,
      availableBalance: 89450.23,
      currency: 'USD',
      lastUpdated: new Date('2024-01-13'),
      status: 'active'
    }
  ];

  getAccounts(): Observable<Account[]> {
    return of(this.mockAccounts).pipe(delay(300));
  }

  getAccountById(id: string): Observable<Account | undefined> {
    const account = this.mockAccounts.find(a => a.id === id);
    return of(account).pipe(delay(200));
  }

  getTotalBalance(): Observable<number> {
    const total = this.mockAccounts.reduce((sum, acc) => sum + acc.balance, 0);
    return of(total).pipe(delay(100));
  }
}
