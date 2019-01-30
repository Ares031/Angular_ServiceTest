import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  // ...
} from '@angular/animations';
import { slideToRight } from '../../animation/router.anim';

@Component({
  selector: 'animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: [ './animation-test.component.css' ],
  animations: [
    slideToRight,
     trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate(3000, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
    ]))
      ]),
      transition('closed => open', [
        animate(2000, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
    ]))
      ]),
    ])
  ]
})


export class AnimationTestComponent implements OnInit  {
   @HostBinding('@routeAnim') state;

  constructor() { }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }
}
