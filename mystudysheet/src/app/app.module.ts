import { PrintService } from './print/print.service';
import { DivisionService } from './service/topic/math/division.service';
import { MultiplicationService } from './service/topic/math/multiplication.service';
import { SubtractionService } from './service/topic/math/subtraction.service';
import { AdditionService } from './service/topic/math/addition.service';
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
import { PrintComponent } from './print/print.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    C5x4vComponent,
    C5x4hComponent,
    C20x1Component,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    GeneratePDFService,
    MathService,
    AdditionService,
    SubtractionService,
    MultiplicationService,
    DivisionService,
    PrintService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
