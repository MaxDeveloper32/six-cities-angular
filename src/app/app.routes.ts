import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
    canActivate: [loginGuard]
  },
  {
    path: '404',
    loadComponent: () => import('./components/not-found/not-found.component'),
  },
  { path: '**', redirectTo: '/404' },
];
