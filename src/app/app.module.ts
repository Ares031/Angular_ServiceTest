import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
//add
import { AppRoutingModule } from './app-routing.module';

import { TestListComponent } from './test/test-list/test-list.component';

import { AnimationTestComponent } from './animation/animation-test/animation-test.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, TestListComponent, AnimationTestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
