import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import { TransactionFilter } from '../models/transaction.model';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return transactions', (done) => {
    service.getTransactions().subscribe(transactions => {
      expect(transactions.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return filtered transactions by type', (done) => {
    const filter: TransactionFilter = {
      startDate: null,
      endDate: null,
      minAmount: null,
      maxAmount: null,
      type: 'credit',
      category: 'all'
    };
    service.getFilteredTransactions(filter).subscribe(transactions => {
      transactions.forEach(t => {
        expect(t.type).toBe('credit');
      });
      done();
    });
  });

  it('should return categories', () => {
    const categories = service.getCategories();
    expect(categories.length).toBeGreaterThan(0);
    expect(categories).toContain('Income');
    expect(categories).toContain('Groceries');
  });
});
