import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToRight } from '../../animation/router.anim';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'error-not-find',
  templateUrl: './error-not-find.component.html',
  styleUrls: [ './error-not-find.component.css' ],
  animations: [ slideToRight ]

})


export class ErrorNotFindComponent implements OnInit  {
   @HostBinding('@routeAnim') state;
 
  constructor() {}
  test : number;
  ngOnInit() {
  }
  getType(v) {
    return `${this.test} ,Type => ${typeof(v)}`;
  }

}
