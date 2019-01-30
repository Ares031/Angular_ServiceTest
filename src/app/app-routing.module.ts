import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent} from './book/book-detail/book-detail.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { BookModule } from './book/book.module';
import { ErrorNotFindComponent } from './error/error-not-find/error-not-find.component';
import { ErrorModule } from './error/error.module';
import { AnimationTestComponent } from './animation/animation-test/animation-test.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, //預設頁
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'test', component: TestListComponent },
  { path: 'animation', component: AnimationTestComponent },
  { path: '**', component : ErrorNotFindComponent } //通常導自訂錯誤頁 404 component
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), BookModule, ErrorModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
