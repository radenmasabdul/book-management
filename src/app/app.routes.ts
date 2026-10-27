import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/pages';
import { AppLayout } from './shared/layout/app-layout/app-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { authGuard } from './core/guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      }
    ]
  }
];
