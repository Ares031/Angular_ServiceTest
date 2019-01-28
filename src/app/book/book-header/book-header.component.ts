import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'book-header',
  templateUrl: './book-header.component.html',
  styleUrls: [ './book-header.component.css' ]
})


export class BookHeaderComponent implements OnInit  {

  constructor() {}
  @Input() //父組件傳給子組件(子組件用input 接收)
  title;
  @Output() //子組件傳給父組件(子組件用output 發射 且父組件實作method接收)
  topra = new EventEmitter(); //發射給父組件(book-list)

  ngOnInit() {}

  delBook() {
    this.topra.emit(this.title);
  }


}
