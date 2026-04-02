import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  quickLinks = [
    { label: 'Transfer Funds', icon: 'swap_horiz' },
    { label: 'Pay Bills', icon: 'payment' },
    { label: 'Deposit Check', icon: 'photo_camera' }
  ];

  constructor(public authService: AuthService) {}

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
