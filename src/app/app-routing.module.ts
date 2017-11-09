import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AppComponentHome } from './app.component.home';

import { AppComponentPackage1 } from './app.component-p1';
import { AppComponentPackage2 } from './app.component-p2';
import { AppComponentPackage3 } from './app.component-p3';

const routes: Routes = [
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
