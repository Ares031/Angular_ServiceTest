import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'book-header',
  templateUrl: './book-header.component.html',
  styleUrls: [ './book-header.component.css' ]
})


export class BookHeaderComponent implements OnInit  {

  constructor() {}

  //接收父組件傳進來的value
  @Input()
  title;

   //子組件傳給父組件(子組件用output 發射 且父組件實作method接收)
  @Output()
  topra = new EventEmitter(); //發射給父組件(book-list)

  ngOnInit() {}
  
  //實作傳給父組件時要發送的值 這裡是發送父組件傳進來的值回傳給父組件
  //book-header.html 綁定(click)事件
  delBook() {
    this.topra.emit(this.title);
  }


}
