import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponentHome } from './app.component.home';

import { TeamComponent } from './team/team.component';
import { CareerComponent } from './career/career.component';
import { PackagesComponent } from './packages/packages.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AppComponentHome,
    TeamComponent,
    CareerComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
