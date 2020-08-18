import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NextComponent } from './line/next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorksheetComponent,
    NavbarComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
