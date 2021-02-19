import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

@NgModule({
  declarations: [
      AppComponent,
      ServiceListComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          //{ path: 'home', component: HomeComponent },
          { path: '**', redirectTo: 'login' }
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
