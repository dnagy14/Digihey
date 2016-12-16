import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// root component
import { AppComponent } from './app.component';

// layout component
import { LayoutComponent } from './layout/layout.component';

// feature modules
import { RedditModule } from './reddit/reddit.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { ToDoListModule } from './todolist/todolist.module';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LoginModule,
    PageNotFoundModule,
    ToDoListModule,
    RedditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
