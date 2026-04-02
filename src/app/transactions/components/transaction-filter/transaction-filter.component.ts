import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TransactionFilter } from '../../../models/transaction.model';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss']
})
export class TransactionFilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<TransactionFilter>();

  filterForm!: UntypedFormGroup;
  categories: string[] = [];
  transactionTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'debit', label: 'Debits' },
    { value: 'credit', label: 'Credits' }
  ];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.categories = this.transactionService.getCategories();
    this.filterForm = new UntypedFormGroup({
      startDate: new UntypedFormControl(null),
      endDate: new UntypedFormControl(null),
      minAmount: new UntypedFormControl(null),
      maxAmount: new UntypedFormControl(null),
      type: new UntypedFormControl('all'),
      category: new UntypedFormControl('all')
    });
  }

  applyFilter(): void {
    const filter: TransactionFilter = this.filterForm.value;
    this.filterChanged.emit(filter);
  }

  resetFilter(): void {
    this.filterForm.reset({
      startDate: null,
      endDate: null,
      minAmount: null,
      maxAmount: null,
      type: 'all',
      category: 'all'
    });
    this.applyFilter();
  }
}
