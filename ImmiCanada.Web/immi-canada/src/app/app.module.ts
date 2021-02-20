import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { IndexComponent } from './components/index/index/index.component';

@NgModule({
  declarations: [
      AppComponent,
      ServiceListComponent,
      IndexComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path: '', redirectTo: 'index', pathMatch: 'full' },
          { path: 'index', component: IndexComponent },
          { path: '**', redirectTo: 'index' }
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
