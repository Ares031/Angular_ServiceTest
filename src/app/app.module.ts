import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//add
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule/*add*/ ],
  declarations: [ AppComponent, BookComponent/*add*/ ],
  providers: [ BookService ],//add
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
