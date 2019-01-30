import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})




export class AppComponent  {
  
  constructor(public router: Router,private _location: Location) { }
  name = 'Angular';
  backPage() {
    this._location.back();
  }

}
