import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
       path: "home",
       component: HomeComponent
    },

    {
        path: 'user-profile',
        component: UserComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    }
];
