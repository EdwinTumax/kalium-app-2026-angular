import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { LoginForm } from './auth/login-form/login-form';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./page/dashboard/dashboard').then((c) => c.Dashboard) }
        ]
    },
    {
        path: 'login', component: LoginForm
    },
    {
        path: '**',
        redirectTo: 'dashboard' 
    }
];
