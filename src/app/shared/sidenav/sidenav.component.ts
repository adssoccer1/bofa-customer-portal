import { Component } from '@angular/core';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navItems: NavItem[] = [
    { label: 'Accounts', route: '/accounts', icon: 'account_balance' },
    { label: 'Transactions', route: '/transactions', icon: 'receipt_long' },
  ];
}
