import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//add
import { BookModule } from './book/book.module';
import { AppRoutingModule } from './app-routing.module';
import { TestListComponent } from './test/test-list/test-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, BookModule ],
  declarations: [ AppComponent, TestListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
