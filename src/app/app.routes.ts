import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

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
        path: '**',
        redirectTo: 'dashboard' 
    }
];
