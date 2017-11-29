import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AppComponentHome } from './app.component.home';

import { TeamComponent } from './team/team.component';
import { CareerComponent } from './career/career.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
    {
        path: 'team',
        component: TeamComponent,
    },
    {
        path: 'career',
        component: CareerComponent,
    },
    {
        path: 'packages/:id',
        component: PackagesComponent,
    },
    {
        path: '',
        component: AppComponentHome,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
