import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ErrorNotFindComponent } from '../error/error-not-find/error-not-find.component';
import { ErrorDirective } from './error.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ErrorNotFindComponent, ErrorDirective ],
  exports: [ ErrorNotFindComponent ] 

})
export class ErrorModule { }
