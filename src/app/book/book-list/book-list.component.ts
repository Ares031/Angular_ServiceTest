import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../IBook';
import { BookModel } from '../BookModel';
import { slideToRight } from '../../animation/router.anim';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.css' ],
  animations: [ slideToRight ]
})

@Injectable()
export class BookListComponent implements OnInit  {
   @HostBinding('@routeAnim') state;
   
  constructor(private service: BookService, public router: Router) {}
  ngOnInit() {
    this.getListData();
  }
  bookList;
  book;
  
  //實作接收子組件傳上來參數的method
  tryChildValue(bookName) {
    alert(`接收到的書名是:${bookName}`);
    
    this.bookList = this.bookList.filter(v=> v.Name !== bookName);
  }

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

  goDetail(id) {
    this.router.navigate(['/book', id]);
  }


}
