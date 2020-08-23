import { AdditionService } from './service/topic/addition.service';
import { MathService } from './service/subject/math.service';
import { GeneratePDFService } from './service/generate-pdf.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { C5x4vComponent } from './layout/c5x4v/c5x4v.component';
import { C5x4hComponent } from './layout/c5x4h/c5x4h.component';
import { C20x1Component } from './layout/c20x1/c20x1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    C5x4vComponent,
    C5x4hComponent,
    C20x1Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [GeneratePDFService, MathService, AdditionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
