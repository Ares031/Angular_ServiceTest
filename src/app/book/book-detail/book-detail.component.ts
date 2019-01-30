import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../IBook';
import { BookModel } from '../BookModel';
import { ActivatedRoute } from '@angular/router';
import { slideToRight } from '../../animation/router.anim';
@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ],
  animations: [ slideToRight ]
})

@Injectable()
export class BookDetailComponent implements OnInit  {
   @HostBinding('@routeAnim') state;

  constructor(private service: BookService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.postDetail();
  }
  book;
  

  postDetail() {
  let id = this.route.snapshot.params['id'];
  //vv(假資料) 取得ID後call api 
   let errData = new BookModel(id,`書名${id}`, id % 2 === 0 ? '前端': '後端',`${id}我是假資料`,parseInt(id,10)+100);


     let url = this.service.getUrl('GetBook');
     this.service.postObs(url,{params:{"id":id}})
     .subscribe({
      next: res => { this.book = res; },
      error: err => { this.book = errData; },
      complete: () => { console.log(this.book); }
    });  
  }
     
}
