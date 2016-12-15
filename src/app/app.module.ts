import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { ArticleComponent } from './article/article.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reddit' },
      { path: 'reddit', component: RedditComponent},
      { path: 'todolist', component: ToDoListComponent},
  ]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    ArticleComponent,
    ToDoListComponent,
    PageNotFoundComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
