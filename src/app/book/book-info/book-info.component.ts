import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'book-info',
  templateUrl: './book-info.component.html',
  styleUrls: [ './book-info.component.css' ]
})


export class BookInfoComponent implements OnInit  {

  constructor() {}
  @Input()
  info;

  ngOnInit() {
  }


}
