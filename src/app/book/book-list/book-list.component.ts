import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../IBook';
import { BookModel } from '../BookModel';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.css' ]
})

@Injectable()
export class BookListComponent implements OnInit  {

  constructor(private service: BookService) {}
  ngOnInit() {
    this.getListData();
  }
  bookList;
  book;

  getListData() {
    let errListData = new Array<BookModel>();
    for(let i=0; i<8; i++){
        let errData = new BookModel(i,`書名${i}`, i %2 === 0 ? '前端': '後端',`${i}我是假資料`,i+100);
         errListData.push(errData);
    }

    let url = this.service.getUrl('GetAll');

    this.service.getObs(url)
    .subscribe({
      next: res => { this.bookList = res; },
      error: err => { this.bookList = errListData; },
      complete: () => { console.log(this.bookList); }
    });
  }

  postDetail(id) {
    //假資料
    let errData = new BookModel(id,`書名${id+1}`, id % 2 === 0 ? '前端': '後端',`${id}我是假資料`,id+1000);


     let url = this.service.getUrl('GetBook');
     this.service.postObs(url,{params:{"id":id}})
     .subscribe({
      next: res => { this.book = res; },
      error: err => { this.book = errData; },
      complete: () => { console.log(this.book); }
    });
  }


}
