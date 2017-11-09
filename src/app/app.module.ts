import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponentHome } from './app.component.home';

import { AppComponentPackage1 } from './app.component-p1';
import { AppComponentPackage2 } from './app.component-p2';
import { AppComponentPackage3 } from './app.component-p3';

@NgModule({
  declarations: [
    AppComponent,AppComponentHome,AppComponentPackage1,AppComponentPackage2,AppComponentPackage3
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
