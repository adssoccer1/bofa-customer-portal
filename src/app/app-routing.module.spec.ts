import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AppRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'accounts', children: [] },
          { path: 'transactions', children: [] }
        ])
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should have routes configured', () => {
    expect(router).toBeTruthy();
  });

  it('should be able to navigate to accounts', async () => {
    const success = await router.navigate(['/accounts']);
    expect(success).toBeTrue();
  });

  it('should be able to navigate to transactions', async () => {
    const success = await router.navigate(['/transactions']);
    expect(success).toBeTrue();
  });
});
