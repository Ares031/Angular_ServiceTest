import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../book/book.service';

import { BookListComponent } from '../book/book-list/book-list.component';
import { BookHeaderComponent } from '../book/book-header/book-header.component';
import { BookInfoComponent } from '../book/book-info/book-info.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ BookListComponent,BookHeaderComponent, BookInfoComponent, BookDetailComponent ],
  providers: [ BookService ],//DI Service 注入
  exports: [ BookListComponent ] //需要把元件匯出app module 才抓得到

})
export class BookModule { }
