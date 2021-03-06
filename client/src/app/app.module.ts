import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';


import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
