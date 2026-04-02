# BofA Customer Portal

Internal consumer banking portal for Bank of America. Provides account overview, transaction history with filtering, and account detail views.

## Tech Stack

- Angular 14.2.x
- Angular Material 14.x (legacy/pre-MDC components)
- TypeScript 4.7
- SCSS
- Karma/Jasmine for unit tests

## Prerequisites

- Node.js 16.x (required for Angular 14)
- Angular CLI 14.2.x (`npm install -g @angular/cli@14.2`)

## Getting Started

```bash
npm install
```

## Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

## Build

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

```bash
ng test              # watch mode
ng test --watch=false # single run
```

## Project Structure

```
src/app/
├── accounts/           # Accounts feature module (lazy-loaded)
│   └── components/
│       ├── account-list/
│       ├── account-detail/
│       └── account-summary/
├── transactions/       # Transactions feature module (lazy-loaded)
│   └── components/
│       ├── transaction-list/
│       ├── transaction-filter/
│       └── transaction-detail/
├── shared/             # Shared module
│   ├── header/
│   ├── footer/
│   ├── sidenav/
│   └── loading-spinner/
├── models/
├── services/
└── guards/
```

## Architecture

- Module-based architecture with lazy-loaded feature modules
- Reactive forms using `UntypedFormGroup` / `UntypedFormControl`
- Angular Material with individual module imports (pre-MDC)
- Route guards for authentication
- Mock services returning Observables (ready for API integration)
