import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountListComponent } from './account-list.component';
import { AccountSummaryComponent } from '../account-summary/account-summary.component';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountListComponent, AccountSummaryComponent, LoadingSpinnerComponent],
      imports: [MatCardModule, MatIconModule, MatProgressSpinnerModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load accounts on init', (done) => {
    setTimeout(() => {
      expect(component.accounts.length).toBeGreaterThan(0);
      expect(component.isLoading).toBeFalse();
      done();
    }, 500);
  });
});
