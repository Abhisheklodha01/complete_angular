import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PipesComponent } from './components/pipes/pipes.component';

export const routes: Routes = [
    {
       path: '',
       component: HomeComponent
    },

    {
        path: 'user-profile',
        component: UserComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    },

    {
        path: 'control-flow',
        component: ControlFlowComponent
    },

    {
        path: 'api-data',
        component: GetApiComponent
    },

    {
        path: "pipes",
        component: PipesComponent
    }
];
