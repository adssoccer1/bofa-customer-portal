export interface Account {
  id: string;
  accountNumber: string;
  accountType: 'checking' | 'savings' | 'credit' | 'investment';
  name: string;
  balance: number;
  availableBalance: number;
  currency: string;
  lastUpdated: Date;
  status: 'active' | 'inactive' | 'frozen';
}
