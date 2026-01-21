import { Routes } from '@angular/router';
import { Login } from './core/auth/pages/login/login';
import { Register } from './core/auth/pages/register/register';
import { HomePage } from './domains/home-page/home-page';
import { UserManagement } from './domains/user-management/user-management';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: '', component: HomePage },
  { path: 'user-management', component: UserManagement },
];
