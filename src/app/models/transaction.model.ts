export interface Transaction {
  id: string;
  accountId: string;
  date: Date;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  category: string;
  status: 'completed' | 'pending' | 'failed';
  merchant: string;
}

export interface TransactionFilter {
  startDate: Date | null;
  endDate: Date | null;
  minAmount: number | null;
  maxAmount: number | null;
  type: string;
  category: string;
}
