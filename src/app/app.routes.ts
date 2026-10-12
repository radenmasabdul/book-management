import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/pages';
import { Dashboard } from './features/dashboard/dashboard';
import { authGuard } from './core/guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
];
