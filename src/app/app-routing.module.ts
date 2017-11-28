import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AppComponentHome } from './app.component.home';

import { AppComponentTeam } from './app.component.team';
import { AppComponentPackage1 } from './app.component.p1';
import { AppComponentPackage2 } from './app.component.p2';
import { AppComponentPackage3 } from './app.component.p3';

import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
    {
        path: 'team',
        component: AppComponentTeam,
    },
    {
        path: 'package1',
        component: AppComponentPackage1,
    },
    {
        path: 'package2',
        component: AppComponentPackage2,
    },
    {
        path: 'package3',
        component: AppComponentPackage3,
    },
    {
        path: 'packages',
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
