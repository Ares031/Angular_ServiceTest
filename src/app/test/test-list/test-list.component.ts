import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToRight } from '../../animation/router.anim';


@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html',
  styleUrls: [ './test-list.component.css' ],
  animations: [ slideToRight ]
})


export class TestListComponent implements OnInit  {
   @HostBinding('@routeAnim') state;

  constructor() {}
  ngOnInit() {
  }
}
