import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction, TransactionFilter } from '../../../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'description', 'merchant', 'category', 'amount', 'status'];
  dataSource = new MatTableDataSource<Transaction>();
  isLoading = true;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadTransactions(): void {
    this.isLoading = true;
    this.transactionService.getTransactions().subscribe(transactions => {
      this.dataSource.data = transactions;
      this.isLoading = false;
    });
  }

  onFilterChanged(filter: TransactionFilter): void {
    this.isLoading = true;
    this.transactionService.getFilteredTransactions(filter).subscribe(transactions => {
      this.dataSource.data = transactions;
      this.isLoading = false;
    });
  }
}
